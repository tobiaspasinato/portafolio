import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ClientLayout from "./ClientLayout";
import LanguageSwitch from "@/components/LanguageSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobias Pasinato - MyPortfolio",
  description: "Tobias Pasinato - MyPortfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex`}>
        <ClientLayout>
          <NavBar />
          <LanguageSwitch />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
