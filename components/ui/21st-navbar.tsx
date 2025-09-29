"use client"

import * as React from "react"
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
          'bg-blue-600 text-white hover:bg-blue-700',
          'dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600'
        ],
        variant === 'outline' && [
          'border border-current',
          'hover:bg-blue-50 dark:hover:bg-blue-900/20'
        ],
        className
      )}
    >
      {children}
    </button>
  )
}

export interface NavItem {
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

  return (
    <nav>
      <ul className="flex gap-x-10 xl:gap-x-8 lg:hidden [@media(max-width:1070px)]:gap-x-6">
        {items.map(({ to, text, items }, index) => {
          const isActive = to === pathname || (to !== '/' && pathname.startsWith(to || ''))
          
          return (
            <li
              className={clsx('relative [perspective:2000px]', items && items.length > 0 && 'group')}
              key={index}
            >
              {to ? (
                <Link
                  className={clsx(
                    'flex items-center gap-x-1 whitespace-pre text-sm font-medium transition-colors',
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  )}
                  href={to}
                >
                  {text}
                  {items && items.length > 0 && <ChevronIcon />}
                </Link>
              ) : (
                <button
                  className={clsx(
                    'flex items-center gap-x-1 whitespace-pre text-sm font-medium transition-colors',
                    'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  )}
                >
                  {text}
                  {items && items.length > 0 && <ChevronIcon />}
                </button>
              )}
              
              {items && items.length > 0 && (
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
                      'relative flex min-w-[248px] flex-col gap-y-0.5 rounded-[14px] border p-2.5 shadow-lg',
                      'bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-800'
                    )}
                  >
                    {items.map(({ icon, text, description, to }, index) => (
                      <li key={index}>
                        <Link
                          className={clsx(
                            'group/link relative flex items-center overflow-hidden whitespace-nowrap rounded-[10px] p-2 transition-colors',
                            'hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300'
                          )}
                          href={to}
                        >
                          {icon && (
                            <div
                              className={clsx(
                                'relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg'
                              )}
                            >
                              {icon}
                            </div>
                          )}
                          <div className="ml-3">
                            <span className="block text-sm font-medium">{text}</span>
                            {description && (
                              <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
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
      'text-gray-700 dark:text-gray-300'
    )}
    onClick={onClick}
  >
    <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
    <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 translate-y-1 rounded-full bg-current" />
  </button>
)

export const Header: React.FC<HeaderProps> = ({
  className,
  theme = 'light',
  isSticky = false,
  isStickyOverlay = false,
  withBorder = false,
  logo,
  menuItems = [],
  onThemeChange,
  rightContent,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const isDarkTheme = theme === 'dark'

  return (
    <header
      className={clsx(
        'relative z-40 w-full',
        isSticky && 'sticky top-0',
        isStickyOverlay && 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80',
        withBorder && 'border-b border-gray-200 dark:border-gray-700',
        'bg-white dark:bg-gray-900',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {logo}
          <Navigation isDarkTheme={isDarkTheme} items={menuItems} />
          <div className="flex items-center gap-x-6">
            {rightContent}
            <MobileMenuButton
              isDarkTheme={isDarkTheme}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Button }
export default Header