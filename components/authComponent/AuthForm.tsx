import React, { ReactNode } from "react";

interface AuthFormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Especificando que o evento é um evento de formulário
}

const AuthForm: React.FC<AuthFormProps> = ({ children, onSubmit }) => {
  return (
    <div className="auth-form">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default AuthForm;
