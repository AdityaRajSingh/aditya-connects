import React from 'react';
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
              Aditya Raj Singh
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Software Developer, Builder, and Lifelong Learner
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4">Navigate</h4>
            <div className="space-y-1 sm:space-y-2">
              <a 
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                About
              </a>
              <a 
                href="/blog"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Blog
              </a>
              <button 
                onClick={() => scrollToSection('journey')}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Journey
              </button>
              <button 
                onClick={() => scrollToSection('building')}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('connect')}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4">Connect</h4>
            <div className="space-y-1 sm:space-y-2">
              <a 
                href="https://www.linkedin.com/in/adityaraj-singh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/adityaraj-singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                GitHub
              </a>
              <a 
                href="https://topmate.io/aditya_raj_singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Topmate
              </a>
              <a 
                href="https://twitter.com/adityaraj_singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Twitter
              </a>
              <a 
                href="mailto:hello@adityaraj.dev"
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Aditya Raj Singh. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-xs sm:text-sm">
            <span>Built with React and</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            <span>for code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;