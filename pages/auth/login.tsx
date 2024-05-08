// pages/login.tsx
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e:any) => {
    e.preventDefault();
    console.log('Login details:', { username, password });
    // Aqui você pode adicionar lógica de autenticação
  };

  return (
    <form onSubmit={handleLogin} className="p-fluid">
      <div className="p-field">
        <label htmlFor="username">Username</label>
        <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoFocus />
      </div>
      <div className="p-field">
        <label htmlFor="password">Password</label>
        <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
      </div>
      <Button type="submit" label="Login" />
    </form>
  );
}
