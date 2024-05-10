// pages/CreateUser.tsx
import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Link from "next/link";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useRef<Toast>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      if (toast.current)
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Passwords do not match",
          life: 3000,
        });
      return;
    }
    console.log("User Created:", { name, username, email, password });
    // Implementar lógica de comunicação com a API aqui
  };

  return (
    <div className="crud-outer-container">
      <Toast ref={toast} />
      <div className="crud-form">
        <form onSubmit={handleSubmit}>
          <h3 className="register-title">Sign Up</h3>
          <div className="p-field">
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="p-field">
            <InputText
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="p-field">
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="p-field">
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="p-field">
            <Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <Button
            className="btn-register"
            type="submit"
            label="Create User"
            icon="pi pi-check"
          />

          <div className="form-links">
            <span className="form-sign flex">
              <Link href="/admin/users" className="register-link">
                Back to Users
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
