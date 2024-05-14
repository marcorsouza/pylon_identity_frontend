// pages/_app.tsx
import "primereact/resources/themes/saga-blue/theme.css"; // Tema principal
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Ícones

import "../styles/globals.css";
import "../styles/login.css";
import "../styles/notfound.css";
import "../styles/crud.css";

import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import LoginLayout from "../components/layout/LoginLayout";
import NotFoundPage from "../components/NotFoundPage";
import AuthProvider from "@/auth-provider";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isLoginPage = /^\/auth(\/|$)/.test(router.pathname);
  const isNotFound = pageProps.statusCode === 404; // Verifica se a rota é '/404'

  // Escolha o Layout com base na rota
  let LayoutComponent = Layout;
  if (isLoginPage) {
    LayoutComponent = LoginLayout;
  } else if (isNotFound) {
    LayoutComponent = NotFoundPage; // Usa o layout de página não encontrada para '/404'
  }

  return (
    <AuthProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </AuthProvider>
  );
}

export default MyApp;
