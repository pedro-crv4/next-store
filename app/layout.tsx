import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import Header from '@/components/header/header';
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja Yampi",
  description: "Loja com produtos Yampi",
};

const montserrat = Montserrat({
    subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
