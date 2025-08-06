import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import physixspertLogo from '@/assets/physixspert-logo-new.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },

    { name: 'الدورات', href: '#courses' },

    { name: 'عن الأستاذ', href: '#teacher' },

    { name: 'اتصل بنا', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={physixspertLogo} 
              alt="PhysixsPert" 
              className="h-10 w-auto"
            />
            <div className="mr-3">
              <h1 className="text-xl font-bold text-primary">PhysixsPert</h1>
              <p className="text-xs text-text-secondary">الفيزياء مع الأستاذ إسلام</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
