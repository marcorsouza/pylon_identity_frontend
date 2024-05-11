import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import AuthContainer from "@/Auth/AuthContainer";
import BrandingArea from "@/Auth/BrandingArea";
import AuthForm from "@/Auth/AuthForm";
import AuthInput from "@/Auth/AuthInput";
import AuthPassword from "@/Auth/AuthPassword";

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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login details:", { username, password, rememberMe });
    showSuccess();
    showError();
    // Adicionar lógica de autenticação
  };

  return (
    <AuthContainer>
      <Toast ref={toast} />
      <BrandingArea/>
      <AuthForm onSubmit={handleLogin}>
          <div className="auth-title">
            {/* Insira o título do formulário aqui, se necessário */}
            Login to Your Account
          </div>
          <AuthInput
            fieldname="username"
            label="Username"
            value={username}
            onChange={setUsername}
            autoFocus={true}
          />
          <AuthPassword
            fieldname="password"
            label="Password"
            value={password}
            onChange={setPassword}
            feedback={true}
          />
          <div className="auth-checkbox">
            <Checkbox
              id="rememberMe"
              checked={rememberMe ?? false}
              onChange={(e) => setRememberMe(e.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
            <Link href="/auth/forgot-password">Forgot Password</Link>
          </div>
          <div className="auth-buttons">
            <Button label="Access my account" icon="pi pi-lock" />
          </div>

          <div className="auth-links">
              Don’t have an account? 
              <Link href="/auth/register">Sign-up here</Link>
            </div>
      </AuthForm>
    </AuthContainer>
  );
}
