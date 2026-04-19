import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const PROJECT_ID = Deno.env.get("GOOGLE_PROJECT_ID") ?? "";
const SA_EMAIL   = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_EMAIL") ?? "";
const RAW_PEM    = Deno.env.get("GOOGLE_PRIVATE_KEY") ?? "";
const LOCATION   = Deno.env.get("GOOGLE_LOCATION") ?? "us-central1";
const MODEL      = Deno.env.get("GEMINI_MODEL") ?? "gemini-2.0-flash";

const PRIVATE_KEY_PEM = RAW_PEM.replace(/\\n/g, "\n");

const API_HOST = LOCATION === "global"
  ? "https://aiplatform.googleapis.com"
  : `https://${LOCATION}-aiplatform.googleapis.com`;

const VERTEX_ENDPOINT =
  `${API_HOST}/v1/projects/${PROJECT_ID}` +
  `/locations/${LOCATION}/publishers/google/models/${MODEL}:generateContent`;

const TOKEN_AUDIENCE = "https://oauth2.googleapis.com/token";
const TOKEN_SCOPE    = "https://www.googleapis.com/auth/cloud-platform";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ─── JWT helpers (Deno Web Crypto) ────────────────────────────────────────────

function b64url(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function b64urlStr(str: string): string {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function importPrivateKey(pem: string): Promise<CryptoKey> {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const der = Uint8Array.from(atob(body), (c) => c.charCodeAt(0));
  return crypto.subtle.importKey(
    "pkcs8",
    der.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

async function getAccessToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header  = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: SA_EMAIL,
    scope: TOKEN_SCOPE,
    aud: TOKEN_AUDIENCE,
    exp: now + 3600,
    iat: now,
  };

  const signingInput = `${b64urlStr(JSON.stringify(header))}.${b64urlStr(JSON.stringify(payload))}`;
  const key = await importPrivateKey(PRIVATE_KEY_PEM);
  const sig = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(signingInput),
  );
  const jwt = `${signingInput}.${b64url(sig)}`;

  const res = await fetch(TOKEN_AUDIENCE, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) throw new Error(`Token error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.access_token as string;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new Response(JSON.stringify({ error: "Missing prompt" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = await getAccessToken();

    const res = await fetch(VERTEX_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 512,
          responseMimeType: "application/json",
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Gemini error ${res.status}: ${text}`);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";

    return new Response(text, {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
