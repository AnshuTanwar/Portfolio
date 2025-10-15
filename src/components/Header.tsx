
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="text-xl font-medium gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.div
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Button asChild size="sm" className="rounded-full hover:scale-105 transition-transform">
                <a href="https://drive.google.com/file/d/1CUungRyNO-WIhV-Dbal_hfmP4KBY27X2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </motion.div>
            <motion.div
              custom={navLinks.length + 1}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <ThemeSwitcher />
            </motion.div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative z-20 hover:bg-accent/50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav 
          className="md:hidden py-4 border-t"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium px-2 py-2 hover:bg-muted rounded-md transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
            >
              <Button asChild size="sm" className="rounded-full w-full">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
