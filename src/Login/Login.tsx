import { useState, useEffect } from "react";
import { useAuth } from "../useAuth";
import "../App.css";
import { usermanagementlabel } from "../Config/config";

type LoginModalState = {
  show: boolean;
  title: string;
  message: string;
};

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalState, setModalState] = useState<LoginModalState>({
    show: false,
    title: "",
    message: "",
  });
  const { login } = useAuth();

  const openModal = (title: string, message: string) => {
    setModalState({ show: true, title, message });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, show: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      openModal("Missing Details", "Please enter both email and password.");
      return;
    }

    if (!email.includes("@")) {
      openModal("Invalid Email", "Please enter a valid email address.");
      return;
    }

    login({ email, role: "User", isAdmin: false });
  };

  return (
    <div className="auth-box">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin && <input type="text" placeholder="Name" />}
      {!isLogin && <input type="number" placeholder="Age" />}

      {!isLogin && (
        <select defaultValue="" aria-label="Gender" className="GenderSelect">
          <option value="" disabled>
            {usermanagementlabel.SELECT_GENDER}
          </option>
          <option value="male">{usermanagementlabel.MALE}</option>
          <option value="female">{usermanagementlabel.FEMALE}</option>
          <option value="other">{usermanagementlabel.OTHER}</option>
        </select>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="Login-button" onClick={handleSubmit}>
        {isLogin ? "Login" : "Register"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "New user? Register here "
          : "Already have an account? Login"}
      </p>

      {modalState.show && (
        <div className="login-modal-overlay" role="dialog" aria-modal="true">
          <div className="login-modal">
            <h3>{modalState.title}</h3>
            <p>{modalState.message}</p>
            <button
              type="button"
              className="login-modal-btn"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Login() {
  const [lightOn, setLightOn] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleLight = () => {
    setLightOn(!lightOn);
  };

  return (
    <div className={`room ${lightOn ? "light-on" : "light-off"}`}>
      <div className="lamp">
        <div className="bulb"></div>

        <div className="rope" onClick={toggleLight}>
          <span className="handle"></span>
        </div>
      </div>

      {/* Dark mode toggle button */}
      <button
        className="theme-toggle"
        onClick={() => setIsDark(!isDark)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: isDark ? "#fff" : "#333",
          color: isDark ? "#333" : "#fff",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
      >
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {lightOn && <LoginForm />}
    </div>
  );
}
