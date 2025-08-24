import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Badge } from './ui/badge';
import { 
  FiClock, 
  FiBook, 
  FiNavigation, 
  FiInfo,
  FiMenu,
  FiX,
  FiUsers,
  FiHeart,
  FiCalendar,
  FiFileText
} from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-sm border-border/50' 
        : 'bg-background/80 backdrop-blur-sm border-border/20'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
            <span className="text-white font-bold text-sm">☪</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
              Budapest Mosque Community
            </span>
            <Badge variant="outline" className="text-xs px-2 py-0.5 border-primary/30 text-primary w-fit">
              BMC
            </Badge>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/prayer-times" className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="flex items-center gap-2">
              <FiClock size={16} />
              Prayer Times
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link to="/islamic-guide" className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="flex items-center gap-2">
              <FiBook size={16} />
              Islamic Guide
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link to="/donations" className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="flex items-center gap-2">
              <FiHeart size={16} />
              Donations
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link to="/opportunities" className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="flex items-center gap-2">
              <FiUsers size={16} />
              Volunteer
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link to="/stories" className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="flex items-center gap-2">
              <FiFileText size={16} />
              Stories
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
          </Link>
        </nav>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden border-t transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container py-4 space-y-2 bg-background/95 backdrop-blur-sm">
          <Link 
            to="/prayer-times" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiClock size={18} />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Prayer Times
            </span>
          </Link>
          <Link 
            to="/islamic-guide" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiBook size={18} />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Islamic Guide
            </span>
          </Link>
          <Link 
            to="/donations" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiHeart size={18} />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Donations
            </span>
          </Link>
          <Link 
            to="/opportunities" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiUsers size={18} />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Volunteer
            </span>
          </Link>
          <Link 
            to="/stories" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiFileText size={18} />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Stories
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
