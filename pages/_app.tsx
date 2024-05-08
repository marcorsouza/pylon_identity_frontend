// pages/_app.tsx
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema principal
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Ícones
import '../styles/globals.css';

import { AppProps } from 'next/app';
import Layout from '../components/Layout/layout';
import LoginLayout from '../components/Layout/LoginLayout';

function MyApp({ Component, pageProps, router  }: AppProps) {

  const isLoginPage = router.pathname === '/auth/login'; // Verifica se a rota é '/login'
// Escolha o Layout com base na rota
  const LayoutComponent = isLoginPage ? LoginLayout : Layout;

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;