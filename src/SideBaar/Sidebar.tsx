import { useNavigate, useLocation } from "react-router-dom";
// import React from "react";
import { LayoutDashboard, Users, Settings, User } from "lucide-react";

type SidebarProps = {
  iscollapsed: boolean;
  onToggle: () => void;
};

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
    active: false,
  },

  {
    icon: Users,
    label: "User Management",
    href: "/users",
    active: false,
  },

  {
    icon: Settings,
    label: "Setting",
    href: "/setting",
    active: false,
  },

  {
    icon: User,
    label: "Profile",
    href: "/profile",
    active: false,
  },
];
export default function Sidebar({ iscollapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const navigation = useNavigate();

  const handleNavigation = (href: string) => {
    if (href !== "#") {
      navigation(href);
    }
  };
  return (
    <aside
      style={{
        width: iscollapsed ? "80px" : "250px",
        background: "#1f2937",
        color: "#fff",
        height: "100vh",
        padding: "16px 8px",
        boxSizing: "border-box",
        transition: "width 0.3s",
        overflow: "hidden",
      }}
      className="sidebar"
    >
      <div
        style={{
          marginBottom: "34px",
          display: "flex",
          justifyContent: iscollapsed ? "center" : "space-between",
          alignItems: "center",
        }}
      >
        {!iscollapsed && (
          <span style={{ margin: 0, fontSize: "35px", fontWeight: "bold" }}>
            My Demo
          </span>
        )}
        {onToggle && (
          <button
            onClick={onToggle}
            style={{
              background: "transparent",
              border: "1px solid #fff",
              color: "#fff",
              padding: "4px 8px",
              cursor: "pointer",
              borderRadius: 4,
            }}
          >
            {iscollapsed ? ">" : "<"}
          </button>
        )}
      </div>

      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href} style={{ marginBottom: 8 }}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  style={{
                    width: "100%",
                    textAlign: iscollapsed ? "center" : "left",
                    background: isActive ? "#374151" : "transparent",
                    border: "none",
                    color: "#fff",
                    padding: "8px 12px",
                    fontWeight: "bolder",
                    cursor: "pointer",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: iscollapsed ? "center" : "flex-start",
                    gap: "8px",
                    fontSize: "120%",
                  }}
                >
                  {item.icon && <item.icon size={20} />}
                  {!iscollapsed && <span>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
