
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Close mobile menu when navigating
    setIsOpen(false);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4 md:py-5",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-foreground"
        >
          <span className="text-primary">Acct</span>
          <span>Finance</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative px-1 py-2 text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                  : "text-foreground/80 hover:text-foreground link-underline"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300 md:hidden pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container flex flex-col items-center space-y-8 py-8">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg font-medium transition-colors animate-fade-up",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground",
                `delay-${index + 1}00`
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
