// components/auth/AuthInput.tsx
import React from "react";
import { InputText } from "primereact/inputtext";

const AuthInput: React.FC<AuthInputProps> = ({
  fieldname,
  label,
  value,
  onChange,
  autoFocus = false,
}) => {
  return (
    <div className="auth-input">
      <label htmlFor={fieldname}>{label}</label>
      <InputText
        id={fieldname}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default AuthInput;
