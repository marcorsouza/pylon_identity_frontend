// components/LoginLayout.tsx

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="login-layout">{children}</div>;
}
