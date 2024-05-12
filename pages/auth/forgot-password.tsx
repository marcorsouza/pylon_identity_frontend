import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Link from "next/link";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import AuthContainer from "@/Auth/AuthContainer";
import BrandingArea from "@/Auth/BrandingArea";
import AuthForm from "@/Auth/AuthForm";
import AuthInput from "@/Auth/AuthInput";

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

  const handleSendResetEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login details:", { emailAddress });
    showSuccess();
    showError();
    // Adicionar lógica de autenticação
  };

  return (
    <AuthContainer>
      <Toast ref={toast} />
      <BrandingArea />
      <AuthForm onSubmit={handleSendResetEmail}>
        <div className="auth-title">
          {/* Insira o título do formulário aqui, se necessário */}
          Forgot Password
        </div>
        <AuthInput
          fieldname="Email Address"
          label="E-mail"
          value={emailAddress}
          onChange={setEmailAddress}
          autoFocus={true}
        />
        <div className="auth-buttons">
          <Button label="Send Reset Link" icon="pi pi-envelope" />
        </div>

        <div className="auth-links">
          Remember your password?
          <Link href="/auth/login">Sign-in here</Link>
        </div>
      </AuthForm>
    </AuthContainer>
  );
}
