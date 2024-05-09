// components/NotFoundPage.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function NotFoundPage() {
  return (
    <div className="outer-container">
      <div className="not-found-container">
        <h1>Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe ou foi movida.</p>
        <Link href="/">
          <Button label="Voltar para Home" className="p-button-outlined p-button-primary" />
        </Link>
      </div>
    </div>
  );
}
