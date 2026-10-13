import type { Metadata } from "next";
import Header from "./Components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "たばしり",
  description: "ほうれん草効率化ツール",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-slate-50">
        <Header />
        <main className="overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
