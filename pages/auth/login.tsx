import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import AuthContainer from "@/authComponent/AuthContainer";
import BrandingArea from "@/authComponent/BrandingArea";
import AuthForm from "@/authComponent/AuthForm";
import AuthInput from "@/authComponent/AuthInput";
import AuthPassword from "@/authComponent/AuthPassword";
import { useRouter } from "next/router";
import { useAuthStore } from "@/authStore";

// pages/login.tsx
export default function Login() {
  const { data: session } = useSession();

  const { login, isAuthenticated, message, setUser, setMessage } =
    useAuthStore();
  const router = useRouter(); // Adiciona o hook useRouter
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState<boolean | undefined>(false);
  const lastMessageRef = useRef<string>("");

  const toast = useRef<Toast>(null);

  const showSuccess = (message: string = "Message Content") => {
    if (toast.current)
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: message,
        life: 3000,
      });
  };

  const showError = (message: string = "Invalid username or password") => {
    if (toast.current)
      toast.current.show({
        severity: "error",
        summary: "Invalid username or password",
        detail: message,
        life: 3000,
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUser(session?.user);
      showSuccess(message);
      router.push("/");
    } else if (message && message !== lastMessageRef.current) {
      setUser(null);
      showError(message);
    }

    // Limpar a mensagem após exibição para evitar repetição
    if (message && message !== lastMessageRef.current) {
      lastMessageRef.current = message; // Atualiza a referência da última mensagem
      setTimeout(() => setMessage(""), 500); // Limpa a mensagem após um breve delay para evitar loop
    }
  }, [isAuthenticated, message, router, setMessage, setUser]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <AuthContainer>
      <Toast ref={toast} />
      <BrandingArea />
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
