"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import { DrDelRosarioNavbar } from "@/components/ui/dr-navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <title>Dr. Javier del Rosario - Urólogo en Panamá</title>
        <meta name="description" content="Especialista en urología con más de 15 años de experiencia. Consultas médicas, cirugías urológicas y tratamientos especializados en Panamá." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preload" href="/logo-desktop.png" as="image" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <DrDelRosarioNavbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </LanguageProvider>
      </body>
    </html>
  );
}