import type { Metadata } from "next";
import Header from '@/components/header/header';
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja Yampi",
  description: "Loja com produtos Yampi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
