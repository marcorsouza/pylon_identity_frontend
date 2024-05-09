// components/Layout.tsx

import Header from "./Page/Header";
import Sidebar from "./Page/Sidebar";
import Main from "./Page/Main";
import Footer from "./Page/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
