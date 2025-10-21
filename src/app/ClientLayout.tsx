'use client';

import { usePathname } from 'next/navigation';
import Background from '@/components/Background';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // isHome es false solo cuando estamos en la ruta raíz "/"
  // Para todas las demás rutas, isHome es true
  const isHome = pathname !== '/';

  return (
    <>
      <Background isHome={isHome} />
      {children}
    </>
  );
}
