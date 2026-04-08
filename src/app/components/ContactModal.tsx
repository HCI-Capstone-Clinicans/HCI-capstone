import { useState } from "react";
import { X, Send } from "lucide-react";

interface ContactModalProps {
  recipientName: string;
  recipientEmail: string;
  onClose: () => void;
}

export function ContactModal({ recipientName, recipientEmail, onClose }: ContactModalProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!subject.trim() || !message.trim()) return;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">
            {sent ? "Message Sent" : `Contact ${recipientName}`}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded transition-colors">
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-10 text-center space-y-2">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-[14px] font-medium text-gray-900">Your message has been sent!</p>
            <p className="text-[13px] text-gray-500">{recipientName} will receive your message at {recipientEmail}.</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="px-6 py-5 space-y-4">
            {/* To field */}
            <div>
              <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-1">To</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-[13px] text-gray-700">
                {recipientName} &lt;{recipientEmail}&gt;
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Research collaboration inquiry"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Hi ${recipientName.split(" ")[0]},\n\nI came across your work and would love to connect about potential collaboration opportunities...`}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={onClose}
                className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                disabled={!subject.trim() || !message.trim()}
                className="px-4 py-2 text-[13px] font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="h-3.5 w-3.5" />
                Send Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
