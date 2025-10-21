import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - My Portfolio",
  description: "Learn more about me",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased h-screen flex flex-1 items-center justify-center">
      {children}
    </div>
  );
}
