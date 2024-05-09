// pages/_app.tsx
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema principal
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Ícones


import '../styles/globals.css';
import '../styles/login.css'
import '../styles/notfound.css'

import { AppProps } from 'next/app';
import Layout from '../components/Layout/layout';
import LoginLayout from '../components/Layout/LoginLayout';
import NotFoundPage from '../components/NotFoundPage';

function MyApp({ Component, pageProps, router  }: AppProps) {

  const isLoginPage = router.pathname === '/auth/login'; // Verifica se a rota é '/login'
  const isNotFound = pageProps.statusCode === 404; // Verifica se a rota é '/404'

  // Escolha o Layout com base na rota
  let LayoutComponent = Layout;
  if (isLoginPage) {
    LayoutComponent = LoginLayout;
  } else if (isNotFound) {
    LayoutComponent = NotFoundPage; // Usa o layout de página não encontrada para '/404'
  }

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;