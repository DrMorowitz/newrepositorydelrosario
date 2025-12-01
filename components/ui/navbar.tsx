"use client"

import * as React from "react"
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'

interface NavButton {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline'
  onClick?: () => void
}

const Button: React.FC<NavButton> = ({ 
  className, 
  children, 
  variant = 'default',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'h-10 px-4 py-2',
        variant === 'default' && [
          'bg-black text-white hover:bg-black/90',
          'dark:bg-white dark:text-black dark:hover:bg-white/90'
        ],
        variant === 'outline' && [
          'border border-current',
          'hover:bg-black/10 dark:hover:bg-white/10'
        ],
        className
      )}
    >
      {children}
    </button>
  )
}

interface NavItem {
  to?: string
  text: string
  items?: {
    icon?: string
    text: string
    description?: string
    to: string
  }[]
}

interface HeaderProps {
  className?: string
  theme?: 'light' | 'dark'
  isSticky?: boolean
  isStickyOverlay?: boolean
  withBorder?: boolean
  logo?: React.ReactNode
  menuItems?: NavItem[]
  onThemeChange?: () => void
  rightContent?: React.ReactNode
}

const ChevronIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-2.5 opacity-60 [&_path]:stroke-2"
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Navigation: React.FC<{ isDarkTheme?: boolean; items: NavItem[] }> = ({ isDarkTheme, items }) => {
  const pathname = usePathname()
  
  const isActiveRoute = (path: string) => {
    return pathname === path
  }

  return (
    <nav>
      <ul className="flex gap-x-10 xl:gap-x-8 lg:hidden [@media(max-width:1070px)]:gap-x-6">
        {items.map(({ to, text, items }, index) => {
          const Tag = to ? Link : 'button'
          const isActive = to ? isActiveRoute(to) : pathname?.startsWith('/blog')
          
          return (
            <li
              className={clsx('relative [perspective:2000px]', items?.length > 0 && 'group')}
              key={index}
            >
              <Tag
                className={clsx(
                  'flex items-center gap-x-1 whitespace-pre text-sm font-semibold transition-all duration-300',
                  isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : isDarkTheme 
                      ? 'text-white hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                )}
                href={to}
              >
                {text}
                {items?.length > 0 && <ChevronIcon />}
              </Tag>
              {items?.length > 0 && (
                <div
                  className={clsx(
                    'absolute -left-5 top-full w-[300px] pt-5',
                    'pointer-events-none opacity-0',
                    'origin-top-left transition-[opacity,transform] duration-200 [transform:rotateX(-12deg)_scale(0.9)]',
                    'group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:[transform:none]'
                  )}
                >
                  <ul
                    className={clsx(
                      'relative flex min-w-[280px] flex-col gap-y-0.5 rounded-[14px] border p-2.5',
                      'dark:border-[#16181D] dark:bg-[#0B0C0F] dark:shadow-[0px_14px_20px_0px_rgba(0,0,0,.5)]',
                      isDarkTheme
                        ? 'border-[#16181D] bg-[#0B0C0F] shadow-[0px_14px_20px_0px_rgba(0,0,0,.5)]'
                        : 'border-gray-200 bg-white shadow-[0px_14px_20px_0px_rgba(0,0,0,.1)]'
                    )}
                  >
                    {items.map(({ icon, text, description, to }, index) => (
                      <li key={index}>
                        <Link
                          className={clsx(
                            'group/link relative flex items-center overflow-hidden whitespace-nowrap rounded-[14px] p-3',
                            'before:absolute before:inset-0 before:z-10 before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100',
                            isDarkTheme
                              ? 'text-white before:bg-[#16181D]'
                              : 'text-gray-700 before:bg-blue-50 hover:text-blue-600'
                          )}
                          href={to}
                        >
                          {icon && (
                            <span className="relative z-10 text-xl mr-3">{icon}</span>
                          )}
                          <div className="relative z-10">
                            <span className="block text-sm font-medium">{text}</span>
                            {description && (
                              <span
                                className={clsx(
                                  'mt-0.5 block text-xs',
                                  isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                                )}
                              >
                                {description}
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const MobileMenuButton: React.FC<{ onClick: () => void; isDarkTheme?: boolean }> = ({
  onClick,
  isDarkTheme,
}) => (
  <button
    className={clsx(
      'hidden lg:block',
      'relative h-8 w-8',
      isDarkTheme ? 'text-white' : 'text-black dark:text-white'
    )}
    onClick={onClick}
  >
    <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
    <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 translate-y-1 rounded-full bg-current" />
  </button>
)

// Dr. del Rosario specific menu configuration
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
        description: "Señales importantes que requieren atención médica",
        to: "/blog/sintomas-alerta"
      },
      {
        icon: "🔬",
        text: "Procedimientos",
        description: "Información sobre procedimientos urológicos",
        to: "/blog/procedimientos"
      },
      {
        icon: "🛡️",
        text: "Prevención",
        description: "Consejos para prevenir problemas urológicos",
        to: "/blog/prevencion"
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

export const DrDelRosarioHeader: React.FC<Partial<HeaderProps>> = ({
  className,
  theme = 'light',
  isSticky = true,
  isStickyOverlay = true,
  withBorder = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const isDarkTheme = theme === 'dark'

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50765911501?text=${message}`, '_blank');
  }

  const logo = (
    <Link href="/" className="flex items-center">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png 1x, https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887223/logo-desktop-2x_gezmzg.png 2x"
        />
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887220/logo-tablet-2x_rodw5h.png"
        />
        <source
          media="(max-width: 767px)"
          srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887221/logo-mobile_kiu9br.png"
        />
        <img 
          src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png"
          alt="Dr. Javier del Rosario - Urólogo"
          className="h-8 md:h-10 lg:h-12 w-auto"
          style={{ maxHeight: '48px' }}
        />
      </picture>
    </Link>
  )

  return (
    <header
      className={clsx(
        'relative z-50 w-full',
        isSticky && 'sticky top-0',
        isStickyOverlay && 'bg-white/80 backdrop-blur-md dark:bg-[#0B0C0F]/80',
        withBorder && 'border-b border-gray-200 dark:border-[#16181D]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {logo}
          <Navigation isDarkTheme={isDarkTheme} items={drDelRosarioMenuItems} />
          <div className="flex items-center gap-x-6">
            {/* Mobile WhatsApp Button - Hidden on Desktop */}
            <div className="lg:hidden">
              <Button
                variant="default"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
            <MobileMenuButton
              isDarkTheme={isDarkTheme}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887221/logo-mobile_kiu9br.png"
                alt="Dr. Javier del Rosario"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Cerrar menú"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-6 space-y-4 bg-white overflow-y-auto">
              {drDelRosarioMenuItems.map((item, index) => (
                <div key={index}>
                  {item.to ? (
                    <Link
                      href={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center text-lg font-medium transition-colors py-3 px-4 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                    >
                      <span className="mr-3 text-xl">
                        {item.text === 'Inicio' && '🏠'}
                        {item.text === 'Sobre Mí' && '👨‍⚕️'}
                        {item.text === 'Servicios' && '🩺'}
                        {item.text === 'Contacto' && '📞'}
                      </span>
                      {item.text}
                    </Link>
                  ) : (
                    <div>
                      <div className="flex items-center text-lg font-medium py-3 px-4 text-gray-900">
                        <span className="mr-3 text-xl">📚</span>
                        {item.text}
                      </div>
                      {item.items && (
                        <div className="ml-8 space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.to}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-50"
                            >
                              <span className="mr-2">{subItem.icon}</span>
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex-shrink-0 p-4 border-t border-gray-200">
              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export { Button }
export default DrDelRosarioHeader