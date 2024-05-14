import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Link from "next/link";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";

// pages/login.tsx
export default function Login() {
  const [emailAddress, setEmailAddress] = useState("");

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
        summary: "Invalid emailAddress or password",
        detail: "Invalid emailAddress or password, remaining_attempts: 5",
        life: 3000,
      });
  };

  const handleSendResetEmail = (e: any) => {
    e.preventDefault();
    console.log("Login details:", { emailAddress });
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
      <div className="auth-form">
        <form onSubmit={handleSendResetEmail} >
          <div className="auth-title">
            {/* Insira o título do formulário aqui, se necessário */}
            Forgot Password
          </div>
          <div className="auth-input">
            <label htmlFor="emailAddress">Email Address</label>
            <InputText
              id="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              autoFocus
            />
          </div>
          <div className="auth-buttons">
            <Button label="Send Reset Link" icon="pi pi-envelope" />
          </div>

          <div className="auth-links">
              Remember your password?
              <Link href="/auth/login">Sign-in here</Link>
            </div>
        </form>
      </div>
    </div>
  );
}
