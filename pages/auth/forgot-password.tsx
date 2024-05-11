// pages/forgot-password.tsx
import { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const toast = useRef<Toast>(null);

  const showSuccess = () => {
    if (toast.current)
      toast.current.show({
        severity: "success",
        summary: "Reset Link Sent",
        detail: "Check your email to reset your password",
        life: 3000,
      });
  };

  const handleForgotPassword = (e: any) => {
    e.preventDefault();
    console.log("Reset password email sent to:", email);
    showSuccess();
    // Implementar lógica de envio de email de recuperação aqui
  };

  return (
    <div className="outer-container">
      <Toast ref={toast} />
      <div className="login-page">
        <div className="form-background">
          <div className="logo-container">
            <img src="/images/logo.png" alt="Logo" />
            <h1>Pylon Identity</h1>
          </div>
        </div>
        <div className="login-form">
          <form onSubmit={handleForgotPassword} className="p-fluid">
            <h3 className="register-title">Forgot Password</h3>
            <div className="p-field">
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                placeholder="Email Address"
              />
            </div>
            <Button
              type="submit"
              label="Send Reset Link"
              icon="pi pi-envelope"
            />
            <div className="form-links">
              <span className="form-sign flex">
                Remember your password?
                <a href="/auth/login" className="register-link">
                  Sign-in here
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
