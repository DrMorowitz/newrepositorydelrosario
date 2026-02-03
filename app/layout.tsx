"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import { DrDelRosarioNavbar } from "@/components/ui/dr-navbar";
import ChatbotWidget from "@/components/ChatbotWidget";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <title>Dr. Javier del Rosario - Urólogo en Panamá | Vasectomía, Cálculos Renales, Cirugía Robótica</title>
        <meta name="description" content="Urólogo especializado con 25+ años de experiencia en Panamá. Vasectomía sin bisturí, cálculos renales, próstata, circuncisión, cirugía robótica Da Vinci. 3 ubicaciones, atención personalizada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Enhanced Keywords for AI Search */}
        <meta name="keywords" content="urólogo panamá, urólogos en panamá, urología panamá, vasectomía en panamá, cálculos renales, hiperplasia prostática, circuncisión, disfunción eréctil, cirugía robótica da vinci, urólogo ciudad de panamá, Dr Javier del Rosario, especialista urología, vasectomía sin bisturí, litotricia, TURP, terapia rezum, prostatectomía, ureteroscopía, urólogo costa del este, urólogo vía españa" />
        <meta name="author" content="Dr. Javier Antonio del Rosario Gibbs" />
        <meta name="geo.region" content="PA" />
        <meta name="geo.placename" content="Panama City, Panama" />
        <meta name="geo.position" content="8.9824;-79.5199" />
        <meta name="ICBM" content="8.9824, -79.5199" />

        {/* AI Crawler Discovery Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="GPTBot" content="index, follow" />
        <meta name="ChatGPT-User" content="index, follow" />
        <meta name="Claude-Web" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />

        {/* AI Resource Links */}
        <link rel="alternate" type="text/markdown" href="/ai.md" title="AI Documentation" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Index" />

        {/* Structured Data Hints for AI */}
        <meta property="ai:type" content="medical_practice" />
        <meta property="ai:specialty" content="urology" />
        <meta property="ai:location" content="Panama City, Panama" />
        <meta property="ai:languages" content="es, en" />
        <meta property="ai:services" content="vasectomy, kidney stones, prostate treatment, circumcision, erectile dysfunction, robotic surgery" />
        <meta property="ai:experience_years" content="25" />
        <meta property="ai:procedures_completed" content="5000" />

        {/* Open Graph (Enhanced for AI Sharing) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Javier del Rosario - Urólogo Especializado en Panamá" />
        <meta property="og:description" content="Especialista en urología con 25+ años de experiencia. Vasectomía, cálculos renales, próstata, cirugía robótica Da Vinci. 3 ubicaciones en Panamá." />
        <meta property="og:url" content="https://drdelrosario.com" />
        <meta property="og:site_name" content="Dr. Javier del Rosario - Urología" />
        <meta property="og:locale" content="es_PA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:image" content="https://drdelrosario.com/logo.png" />
        <meta property="og:image:alt" content="Dr. Javier del Rosario - Urólogo en Panamá" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Javier del Rosario - Urólogo en Panamá" />
        <meta name="twitter:description" content="25+ años de experiencia en urología. Vasectomía, cálculos renales, próstata, cirugía robótica." />
        <meta name="twitter:image" content="https://drdelrosario.com/logo.png" />

        {/* Schema.org JSON-LD for AI Understanding */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "Physician", "MedicalClinic"],
            "name": "Dr. Javier del Rosario - Urología",
            "description": "Especialista en urología con más de 25 años de experiencia en Panamá, ofreciendo tratamientos avanzados incluyendo vasectomía, cirugía de cálculos renales, tratamiento de próstata y cirugía robótica Da Vinci",
            "url": "https://drdelrosario.com",
            "telephone": "+507-XXXX-XXXX",
            "email": "info@drdelrosario.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PA",
              "addressLocality": "Ciudad de Panamá",
              "addressRegion": "Panamá"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "8.9824",
              "longitude": "-79.5199"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "8.9824",
                "longitude": "-79.5199"
              },
              "geoRadius": "50000"
            },
            "medicalSpecialty": ["Urology"],
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Vasectomía",
                "description": "Procedimiento de esterilización masculina sin bisturí"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Tratamiento de Cálculos Renales",
                "description": "Litotricia, ureteroscopía y tratamientos avanzados"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Tratamiento de Próstata",
                "description": "Manejo de hiperplasia prostática benigna, TURP, Rezum"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Cirugía Robótica Da Vinci",
                "description": "Procedimientos urológicos mínimamente invasivos"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Circuncisión",
                "description": "Procedimientos en adultos y niños"
              }
            ],
            "knowsLanguage": ["es", "en"],
            "image": "https://drdelrosario.com/logo.png",
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "100"
            }
          })
        }} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://drdelrosario.com" />

        {/* Language Alternates */}
        <link rel="alternate" hrefLang="es" href="https://drdelrosario.com" />
        <link rel="alternate" hrefLang="en" href="https://drdelrosario.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://drdelrosario.com" />

        {/* Sitemap Reference */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887052/android-chrome-512x512_qiefcd.png" />

        {/* Performance Optimizations */}
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
        <ChatbotWidget />
      </body>
    </html>
  );
}