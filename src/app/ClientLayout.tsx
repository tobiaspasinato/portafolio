'use client';

import { usePathname } from 'next/navigation';
import Background from '@/components/Background';
import { useEffect } from 'react';
import '@/app/config/i18n';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // isHome es false solo cuando estamos en la ruta raíz "/"
  // Para todas las demás rutas, isHome es true
  const isHome = pathname !== '/';

  useEffect(() => {
    // Inicializar i18n cuando el componente se monte
  }, []);

  return (
    <>
      <Background isHome={isHome} />
      {children}
    </>
  );
}
