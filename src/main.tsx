import { createRoot } from "react-dom/client";
// import "./index.css";
import AppRoutes from "./AppRoutes.tsx";
import { AuthProvider } from "./useAuth";

const rootelement = document.getElementById("root");
if (!rootelement) throw new Error("Failed to find the root element");

const root = createRoot(rootelement);
root.render(
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);
