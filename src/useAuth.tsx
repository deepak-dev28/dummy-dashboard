import { createContext, useContext, useState, type ReactNode } from "react";

export type AuthUser = {
  email: string;
  role: string;
  isAdmin: boolean;
};

type AuthContextType = {
  user: AuthUser | null;
  login: (user: Pick<AuthUser, "email"> & Partial<AuthUser>) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login: AuthContextType["login"] = ({ email, role = "User", isAdmin = false }) => {
    setUser({ email, role, isAdmin });
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}