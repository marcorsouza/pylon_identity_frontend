// pages/register.tsx
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

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
    <div className="outer-container">
      <div className="register-form">
        <Toast ref={toast} />
        <form onSubmit={handleSubmit} className="p-fluid">
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
              feedback={false}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="p-field">
            <Password
              value={confirmPassword}              
              feedback={false}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div className="register-button flex">
            <Button className="btn-cancel" type="submit" label="Cancel" severity="danger" outlined/>

            <Button  className="btn-register" type="submit" label="Submit" />
          </div>

          <div className="form-links">
              <span className="login-signup flex">
                Already have an account?
                <a href="/auth/login" className="register-link">
                Login
                </a>
                </span> 
            </div>
        </form>
      </div>
    </div>
  );
}
