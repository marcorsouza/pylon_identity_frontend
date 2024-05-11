import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";

// pages/login.tsx
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState<boolean | undefined>(false);

  const toast = useRef<Toast>(null);

  const showSuccess = () => {
    if (toast.current)
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Message Content",
        life: 3000,
      });
  };

  const showError = () => {
    if (toast.current)
      toast.current.show({
        severity: "error",
        summary: "Invalid username or password",
        detail: "Invalid username or password, remaining_attempts: 5",
        life: 3000,
      });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Login details:", { username, password, rememberMe });
    showSuccess();
    showError();
    // Adicionar lógica de autenticação
  };

  return (
    <div className="auth-container">
      <Toast ref={toast} />
      <div className="branding-area">
        <img src="/images/logo.png" alt="Brand Logo" />
        <h1>Pylon Identity</h1>
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin} >
          <div className="login-title">
            {/* Insira o título do formulário aqui, se necessário */}
            Login to Your Account
          </div>
          <div className="login-input">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              feedback={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-checkbox">
            <Checkbox
              id="rememberMe"
              checked={rememberMe ?? false}
              onChange={(e) => setRememberMe(e.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
            <Link href="/auth/forgot-password">Forgot Password</Link>
          </div>
          <div className="login-buttons">
            <Button label="Access my account" icon="pi pi-lock" />
          </div>

          <div className="login-links">
              Don’t have an account? 
              <Link href="/auth/register">Sign-up here</Link>
            </div>
        </form>
      </div>
    </div>
  );
}
