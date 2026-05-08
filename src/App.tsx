import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./AppRoutes";
import { AuthProvider } from "./useAuth";
// ...existing code...
const rootelement = document.getElementById("root");
if (!rootelement) throw new Error("Failed to find the root element");

const root = createRoot(rootelement);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
