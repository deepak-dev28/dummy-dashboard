import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Usermanagement from "./UserManagement/Usermanagement";
import Setting from "./Page/Setting";
import Profile from "./Page/Profile";
import Sidebar from "./SideBaar/Sidebar";
import "./App.css";
import Login from "./Login/Login";
import { useAuth } from "./useAuth";

function RequireAuth({
  children,
  adminOnly = false,
}: {
  children: React.ReactElement;
  adminOnly?: boolean;
}) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && !user.isAdmin && user.role !== "Admin")
    return <Navigate to="/" replace />;
  return children;
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {user && (
          <Sidebar
            iscollapsed={isCollapsed}
            onToggle={() => setIsCollapsed((prev) => !prev)}
          />
        )}
        <main
          style={{
            flex: 1,
            padding: 16,
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/dashboard" replace /> : <Login />}
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <Usermanagement />
                </RequireAuth>
              }
            />
            <Route
              path="/setting"
              element={
                <RequireAuth>
                  <Setting />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
