"use client"

import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Header } from './21st-navbar'
import type { NavItem } from './21st-navbar'

const DrLogo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <div className="flex items-center h-8 overflow-visible">
      <Image
        src="/logo-desktop.png"
        alt="Dr. Javier del Rosario"
        width={150}
        height={50}
        className="h-10 w-auto"
        priority
      />
    </div>
  </Link>
)

const drDelRosarioMenuItems: NavItem[] = [
  { 
    to: "/", 
    text: "Inicio" 
  },
  { 
    to: "/sobre-mi", 
    text: "Sobre Mí" 
  },
  { 
    to: "/servicios", 
    text: "Servicios" 
  },
  {
    text: "Blog",
    items: [
      { 
        icon: "📚", 
        text: "Todos los Artículos", 
        description: "Explora todos nuestros artículos médicos",
        to: "/blog" 
      },
      { 
        icon: "🏥", 
        text: "Condiciones Comunes", 
        description: "Información sobre condiciones urológicas frecuentes",
        to: "/blog/condiciones-comunes" 
      },
      { 
        icon: "⚠️", 
        text: "Síntomas de Alerta", 
        description: "Cuándo consultar urgentemente",
        to: "/blog/sintomas-alerta" 
      },
      { 
        icon: "🛡️", 
        text: "Prevención y Cuidado", 
        description: "Consejos para mantener la salud urológica",
        to: "/blog/prevencion" 
      },
      { 
        icon: "⚕️", 
        text: "Procedimientos Explicados", 
        description: "Información detallada sobre tratamientos",
        to: "/blog/procedimientos" 
      },
      { 
        icon: "❓", 
        text: "Preguntas Frecuentes", 
        description: "Respuestas a las consultas más comunes",
        to: "/blog/preguntas-frecuentes" 
      }
    ]
  },
  { 
    to: "/contacto", 
    text: "Contacto" 
  }
]

export const DrDelRosarioNavbar: React.FC = () => {
  return (
    <Header
      logo={<DrLogo />}
      menuItems={drDelRosarioMenuItems}
      isSticky={true}
      isStickyOverlay={true}
      withBorder={true}
      className="shadow-sm"
    />
  )
}

export default DrDelRosarioNavbar