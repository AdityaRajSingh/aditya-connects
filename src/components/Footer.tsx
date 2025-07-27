import React from 'react';
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Aditya Raj Singh
            </h3>
            <p className="text-muted-foreground">
              Software Developer, Builder, and Lifelong Learner
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigate</h4>
            <div className="space-y-2">
              <a 
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <button 
                onClick={() => scrollToSection('writings')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Writings
              </button>
              <button 
                onClick={() => scrollToSection('journey')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Journey
              </button>
              <button 
                onClick={() => scrollToSection('connect')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/adityaraj-singh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://topmate.io/aditya_raj_singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Topmate
              </a>
              <a 
                href="https://twitter.com/adityaraj_singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a 
                href="mailto:hello@adityaraj.dev"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aditya Raj Singh. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Built with React and</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;