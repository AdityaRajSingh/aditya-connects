import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
          >
            Aditya Raj Singh
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => handleNavClick('/about')}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('/blog')}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('building')}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              Work
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('connect')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 lg:px-6"
              size="sm"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <button 
                onClick={() => handleNavClick('/about')}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('/blog')}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('journey')}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                Journey
              </button>
              <button 
                onClick={() => scrollToSection('building')}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                Work
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => scrollToSection('connect')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[44px]"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;