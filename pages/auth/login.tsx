// pages/login.tsx
import { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

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
    <div className="outer-container">
      <Toast ref={toast} />
      <div className="login-page">
        <div className="login-background">
          <div className="logo-container">
            <img src="/images/logo.png" alt="Logo" />
            <h1>Pylon Identity</h1>
          </div>
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin} className="p-fluid">
            <div className="p-field">
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                placeholder="Username"
              />
            </div>
            <div className="p-field">
              <Password
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                feedback={false}
                placeholder="Password"
                toggleMask
              />
            </div>
            <div className="p-field-checkbox">
              <Checkbox
                inputId="rememberMe"
                checked={rememberMe ?? false}
                onChange={(e) => setRememberMe(e.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
              <a href="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
            <Button type="submit" label="Login" icon="pi pi-lock" />
            <div className="form-links">
              <span className="login-signup flex">
                Don’t have an account?
                <a href="/register" className="register-link">
                Sign-up here
                </a>
                </span> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
