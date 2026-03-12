import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GH Management | Management Sportif & Sponsoring",
  description: "GH Management est une agence suisse dédiée à la gestion de carrière d'athlètes talentueux et à l'organisation d'événements sportifs d'exception.",
  keywords: "management sportif, sponsoring, athlètes suisses, tennis, golf, Suisse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
