import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-soft border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Aditya Raj Singh
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('building')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('connect')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;