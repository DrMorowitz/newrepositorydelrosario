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
      <ul className="flex gap-x-10 xl:gap-x-8 [@media(max-width:1070px)]:hidden">
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
                      : isDarkTheme ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
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
                    isDarkTheme ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                  )}
                >
                  {text}
                  {items && items.length > 0 && <ChevronIcon />}
                </button>
              )}
              
              {items && items.length > 0 && (
                <div
                  className={clsx(
                    'absolute -left-5 top-full w-[350px] pt-5',
                    'pointer-events-none opacity-0',
                    'origin-top-left transition-[opacity,transform] duration-200 [transform:rotateX(-12deg)_scale(0.9)]',
                    'group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:[transform:none]'
                  )}
                >
                  <ul
                    className={clsx(
                      'relative flex w-full flex-col gap-y-0.5 rounded-[14px] border p-2.5 shadow-lg',
                      isDarkTheme
                        ? 'border-[#16181D] bg-[#0B0C0F] shadow-[0px_14px_20px_0px_rgba(0,0,0,.5)]'
                        : 'border-gray-200 bg-white shadow-[0px_14px_20px_0px_rgba(0,0,0,.1)]'
                    )}
                  >
                    {items.map(({ icon, text, description, to }, index) => (
                      <li key={index}>
                        <Link
                          className={clsx(
                            'group/link relative flex items-start rounded-[10px] p-3 transition-colors',
                            'hover:bg-blue-50 dark:hover:bg-blue-900/20',
                            isDarkTheme ? 'text-white' : 'text-black dark:text-white'
                          )}
                          href={to}
                        >
                          {icon && (
                            <div
                              className={clsx(
                                'relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg mr-3'
                              )}
                            >
                              {icon}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <span className="block text-sm font-medium leading-tight">{text}</span>
                            {description && (
                              <span className={clsx(
                                'mt-1 block text-xs leading-relaxed',
                                isDarkTheme ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'
                              )}>
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

const MobileMenuButton: React.FC<{ onClick: () => void; isDarkTheme?: boolean; isOpen?: boolean }> = ({
  onClick,
  isDarkTheme,
  isOpen = false,
}) => (
  <button
    className={clsx(
      '[@media(min-width:1070px)]:hidden',
      'relative h-8 w-8',
      isDarkTheme ? 'text-white' : 'text-black dark:text-white'
    )}
    onClick={onClick}
    aria-label="Toggle mobile menu"
  >
    <span 
      className={clsx(
        "absolute left-1/2 top-1/2 block h-0.5 w-5 rounded-full bg-current transition-transform",
        isOpen 
          ? "-translate-x-1/2 -translate-y-1/2 rotate-45" 
          : "-translate-x-1/2 -translate-y-1/2"
      )} 
    />
    <span 
      className={clsx(
        "absolute left-1/2 top-1/2 block h-0.5 w-5 rounded-full bg-current transition-transform",
        isOpen 
          ? "-translate-x-1/2 translate-y-1/2 -rotate-45" 
          : "-translate-x-1/2 translate-y-1"
      )} 
    />
  </button>
)

const MobileMenu: React.FC<{ 
  items: NavItem[]; 
  isOpen: boolean; 
  onClose: () => void;
  isDarkTheme?: boolean;
}> = ({ items, isOpen, onClose, isDarkTheme }) => {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm [@media(min-width:1070px)]:hidden" 
        onClick={onClose}
      />
      
      {/* Mobile Menu Panel */}
      <div className={clsx(
        "fixed top-0 right-0 z-50 h-full w-80 shadow-xl [@media(min-width:1070px)]:hidden",
        isDarkTheme ? 'bg-[#0B0C0F]' : 'bg-white dark:bg-gray-900'
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className={clsx(
            "flex items-center justify-between p-4",
            isDarkTheme ? 'border-b border-[#16181D]' : 'border-b border-gray-200 dark:border-gray-700'
          )}>
            <span className={clsx(
              "text-lg font-semibold",
              isDarkTheme ? 'text-white' : 'text-gray-900 dark:text-white'
            )}>
              Menú
            </span>
            <button
              onClick={onClose}
              className={clsx(
                "rounded-lg p-2 transition-colors",
                isDarkTheme 
                  ? 'text-gray-400 hover:bg-[#16181D] hover:text-gray-300'
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300'
              )}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {items.map(({ to, text, items: subItems }, index) => {
                const isActive = to === pathname || (to !== '/' && pathname.startsWith(to || ''))
                
                return (
                  <li key={index}>
                    {to ? (
                      <Link
                        href={to}
                        onClick={onClose}
                        className={clsx(
                          'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          isActive 
                            ? isDarkTheme 
                              ? 'bg-blue-900/20 text-blue-400' 
                              : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : isDarkTheme
                              ? 'text-white hover:bg-[#16181D]'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                        )}
                      >
                        {text}
                      </Link>
                    ) : (
                      <div>
                        <div className={clsx(
                          "px-3 py-2 text-sm font-medium",
                          isDarkTheme ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                        )}>
                          {text}
                        </div>
                        {subItems && subItems.length > 0 && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {subItems.map(({ text: subText, to: subTo }, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subTo}
                                  onClick={onClose}
                                  className={clsx(
                                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                                    isDarkTheme
                                      ? 'text-gray-400 hover:bg-[#16181D] hover:text-white'
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                                  )}
                                >
                                  {subText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

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
    <>
      <header
        className={clsx(
          'relative z-40 w-full',
          isSticky && 'sticky top-0',
          isStickyOverlay && 'bg-white/80 backdrop-blur-md dark:bg-[#0B0C0F]/80',
          withBorder && 'border-b border-gray-200 dark:border-[#16181D]',
          isDarkTheme ? 'bg-[#0B0C0F]' : 'bg-white dark:bg-gray-900',
          className
        )}
      >
        <div className="mx-auto max-w-[1760px] px-5 py-4">
          <div className="flex items-center">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              {logo}
            </div>
            
            {/* Navigation - Center */}
            <div className="flex-1 flex justify-center">
              <Navigation isDarkTheme={isDarkTheme} items={menuItems} />
            </div>
            
            {/* Right Content and Mobile Menu - Right Side */}
            <div className="flex items-center gap-x-6 flex-shrink-0">
              {rightContent}
              {onThemeChange && (
                <Button
                  variant="default"
                  onClick={onThemeChange}
                >
                  {isDarkTheme ? '🌞' : '🌙'}
                </Button>
              )}
              <MobileMenuButton
                isDarkTheme={isDarkTheme}
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu
        items={menuItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDarkTheme={isDarkTheme}
      />
    </>
  )
}

export { Button }
export default Header