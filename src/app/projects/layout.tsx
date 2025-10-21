import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - My Portfolio",
  description: "Learn more about my projects and work.",
};

export default function ProjectsLayout({
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
