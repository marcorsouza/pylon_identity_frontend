// pages/register.tsx
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Link from "next/link";
import AuthContainer from "@/authComponent/AuthContainer";
import BrandingArea from "@/authComponent/BrandingArea";
import AuthForm from "@/authComponent/AuthForm";
import AuthInput from "@/authComponent/AuthInput";
import AuthPassword from "@/authComponent/AuthPassword";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = React.useRef<Toast>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      if (toast.current)
        toast.current.show({
          severity: "error",
          summary: "Passwords do not match",
          detail: "Please check your passwords.",
          life: 3000,
        });
      return;
    }
    // Implementar lógica de registro
    console.log("Register details:", { name, username, email, password });
  };

  return (
    <AuthContainer>
      <Toast ref={toast} />
      <BrandingArea />
      <AuthForm onSubmit={handleSubmit}>
        <div className="auth-title">
          {/* Insira o título do formulário aqui, se necessário */}
          Sign Up
        </div>
        <AuthInput
          fieldname="name"
          label="Name"
          value={name}
          onChange={setName}
          autoFocus={true}
        />
        <AuthInput
          fieldname="email"
          label="E-mail"
          value={email}
          onChange={setEmail}
        />
        <AuthInput
          fieldname="username"
          label="Username"
          value={username}
          onChange={setUsername}
        />
        <AuthPassword
          fieldname="password"
          label="Password"
          value={password}
          onChange={setPassword}
          feedback={true}
        />
        <AuthPassword
          fieldname="confirmPassword"
          label="ConfirmPassword"
          value={confirmPassword}
          onChange={setConfirmPassword}
          feedback={true}
        />
        <div className="auth-buttons flex">
          <Button
            className="btn-cancel"
            type="submit"
            label="Cancel"
            severity="danger"
            outlined
          />
          <Button
            className="btn-primary"
            label="Access my account"
            icon="pi pi-lock"
          />
        </div>

        <div className="auth-links">
          Already have an account?
          <Link href="/auth/login">Sign-in here</Link>
        </div>
      </AuthForm>
    </AuthContainer>
  );
}
