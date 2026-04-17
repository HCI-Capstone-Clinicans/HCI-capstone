import { RouterProvider } from "react-router";
import { router } from "./routes";
import { BookmarksProvider } from "./context/BookmarksContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BookmarksProvider>
        <RouterProvider router={router} />
      </BookmarksProvider>
    </AuthProvider>
  );
}
