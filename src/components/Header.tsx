import React from 'react';
import { Menu, X } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Início', action: 'home' as const },
    { id: 'plans', label: 'Planos', action: 'scroll' as const },
    { id: 'clients', label: 'Clientes', action: 'scroll' as const },
    { id: 'contact', label: 'Contato', action: 'scroll' as const },
    { id: 'about', label: 'Sobre Nós', action: 'about' as const }
  ];

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }
  };

  return (
    <header className={`${isScrolled ? 'bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm' : 'bg-transparent'} sticky top-0 z-50 transition-colors`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => {
              if (currentPage !== 'home') {
                onNavigate('home');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="Voltar ao topo"
            role="button"
          >
            <Logo size="lg" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.action === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (currentPage !== 'home') onNavigate('home');
                  } else if (item.action === 'scroll') {
                    scrollToSection(item.id);
                  } else if (item.action === 'about') {
                    onNavigate('about');
                  }
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors text-gray-800 hover:text-purple-700 after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex">
            <button
              onClick={openWhatsAppGeneral}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t" role="dialog" aria-modal="true">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.action === 'home') {
                      onNavigate('home');
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    } else if (item.action === 'scroll') {
                      scrollToSection(item.id);
                    } else if (item.action === 'about') {
                      onNavigate('about');
                    }
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors text-gray-800 hover:text-purple-700 hover:bg-purple-50`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={openWhatsAppGeneral}
                className="block bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center mt-2 w-full"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;