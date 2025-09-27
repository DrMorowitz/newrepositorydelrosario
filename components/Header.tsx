"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import CloudinaryLogo from './CloudinaryLogo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { 
  navAnimation, 
  mobileMenuAnimation, 
  buttonAnimation,
  staggerContainer,
  fadeIn 
} from '@/lib/animations';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isScrolled } = useScrollPosition(50);

  const isActiveRoute = (path: string) => {
    return pathname === path;
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Force Netlify cache clear - complete rebuild required
  // This comment forces a new deployment with fresh cache


  return (
    <motion.header 
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 shadow-md border-border/50' 
          : 'bg-background/80'
      }`}
      initial="hidden"
      animate="visible"
      variants={navAnimation}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <picture>
                {/* Desktop */}
                <source
                  media="(min-width: 1024px)"
                  srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png 1x, https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887223/logo-desktop-2x_gezmzg.png 2x"
                />
                {/* Tablet */}
                <source
                  media="(min-width: 768px)"
                  srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887220/logo-tablet-2x_rodw5h.png"
                />
                {/* Mobile */}
                <source
                  media="(max-width: 767px)"
                  srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887221/logo-mobile_kiu9br.png"
                />
                {/* Fallback */}
                <img 
                  src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png"
                  alt="Dr. Javier del Rosario - Urólogo"
                  className="h-8 md:h-10 lg:h-12 w-auto max-h-12"
                  style={{ maxHeight: '48px' }}
                />
              </picture>
            </Link>
          </motion.div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className={`font-semibold text-base transition-all duration-300 hover:text-primary ${
                  isActiveRoute('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Inicio
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/sobre-mi"
                className={`font-semibold text-base transition-all duration-300 hover:text-primary ${
                  isActiveRoute('/sobre-mi') ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Sobre Mí
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/servicios"
                className={`font-semibold text-base transition-all duration-300 hover:text-primary ${
                  isActiveRoute('/servicios') ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Servicios
              </Link>
            </motion.div>
            
            {/* Blog Dropdown */}
            <div className="relative">
              <motion.button
                className={`flex items-center font-semibold text-base transition-all duration-300 hover:text-primary ${
                  pathname?.startsWith('/blog') ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground hover:text-foreground'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        href="/blog"
                        className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        Todos los Artículos
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      <Link
                        href="/blog/condiciones-comunes"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        Condiciones Comunes
                      </Link>
                      <Link
                        href="/blog/sintomas-alerta"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        Síntomas de Alerta
                      </Link>
                      <Link
                        href="/blog/procedimientos"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        Procedimientos
                      </Link>
                      <Link
                        href="/blog/prevencion"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        Prevención
                      </Link>
                      <Link
                        href="/blog/preguntas-frecuentes"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        Preguntas Frecuentes
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contacto"
                className={`font-semibold text-base transition-all duration-300 hover:text-primary ${
                  isActiveRoute('/contacto') ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Contacto
              </Link>
            </motion.div>
          </nav>

          {/* Desktop WhatsApp Button */}
          <div className="hidden lg:flex">
            <motion.div
              variants={buttonAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={handleWhatsApp}
                className="btn-whatsapp flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Animated Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu Container with Slide Animation */}
            <motion.div 
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header - Logo Only - Updated */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887221/logo-mobile_kiu9br.png"
                  alt="Dr. Javier del Rosario"
                  className="h-8 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png';
                  }}
                />
                <motion.button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-md"
                  aria-label="Cerrar menú"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Navigation Menu with Stagger Animation */}
              <motion.nav 
                className="flex-1 p-6 space-y-6 bg-white overflow-y-auto"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  { to: "/", label: "Inicio" },
                  { to: "/sobre-mi", label: "Sobre Mí" },
                  { to: "/servicios", label: "Servicios" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contacto", label: "Contacto" }
                ].map((item, index) => (
                  <motion.div key={item.to} variants={fadeIn}>
                    <Link
                      href={item.to}
                      onClick={closeMobileMenu}
                      className={`text-lg font-medium transition-colors py-2 block ${
                        isActiveRoute(item.to) 
                          ? 'text-blue-600 border-l-4 border-blue-600 pl-4' 
                          : 'text-gray-900 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* WhatsApp Button with Animation */}
              <motion.div 
                className="flex-shrink-0 p-4 border-t border-gray-200"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={() => {
                    handleWhatsApp();
                    closeMobileMenu();
                  }}
                  className="gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full btn-whatsapp flex items-center justify-center space-x-2"
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;