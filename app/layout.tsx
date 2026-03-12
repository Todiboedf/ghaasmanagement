import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GHaas Management | Management Sportif & Sponsoring en Suisse",
  description: "GHaas Management est une agence suisse de management sportif et sponsoring basée à Granges-Paccot. Nous représentons des athlètes d'élite en golf et tennis et les mettons en relation avec des sponsors.",
  keywords: "management sportif Suisse, sponsoring athlètes, golf professionnel Suisse, tennis professionnel, GHaas Management, Guillaume Haas",
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
