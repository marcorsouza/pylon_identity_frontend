// components/auth/AuthInput.tsx
import React from 'react';
import { Password } from 'primereact/password';


const AuthPassword: React.FC<AuthInputsPasswordProps> = ({ fieldname, label, value, onChange, autoFocus = false, feedback = false }) => {
  return (
    <div className="auth-input">
      <label htmlFor={fieldname}>{label}</label>
      <Password
        id={fieldname}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={autoFocus}
        feedback={feedback}
      />
    </div>
  );
};

export default AuthPassword;
