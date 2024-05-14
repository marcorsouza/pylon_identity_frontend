// pages/register.tsx
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = React.useRef<Toast>(null);

  const handleSubmit = (e: any) => {
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
    <div className="auth-container">
      <Toast ref={toast} />
      <div className="branding-area">
        <img src="/images/logo.png" alt="Brand Logo" />
        <h1>Pylon Identity</h1>
      </div>
      <div className="auth-form">
        <form onSubmit={handleSubmit} >
          <div className="auth-title">
            {/* Insira o título do formulário aqui, se necessário */}
            Sign Up
          </div>
          <div className="auth-input">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>
          <div className="auth-input">
            <label htmlFor="email">E-mail</label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div className="auth-input">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>
          <div className="auth-input">
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              feedback={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="password">Confirm Password</label>
            <Password
              id="confirmPassword"
              feedback={false}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="auth-buttons flex">
            <Button className="btn-cancel" type="submit" label="Cancel" severity="danger" outlined/>
            <Button className="btn-primary" label="Access my account" icon="pi pi-lock" />
          </div>

          <div className="auth-links">
              Already have an account?
              <Link href="/auth/login">Sign-in here</Link>
            </div>
        </form>
      </div>
    </div>
  );
}
