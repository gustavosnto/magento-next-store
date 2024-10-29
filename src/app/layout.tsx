import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "My Store Online - Home Page",
  description: "Store created by Gustavo Santos using Magento and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        <Header />
        <main className='py-6'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
