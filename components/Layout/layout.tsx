// components/Layout.tsx
import { useSession, signIn } from "next-auth/react";
import Header from "./Page/Header";
import Sidebar from "./Page/Sidebar";
import Main from "./Page/Main";
import Footer from "./Page/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession({
    required: true, // Isso fará com que a sessão seja requerida
    onUnauthenticated() {
      // Função que é chamada quando o usuário não está autenticado
      signIn(); // Redireciona para a página de login
    },
  });

  // Opção de mostrar conteúdo de carregamento enquanto a sessão está sendo verificada
  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
