import React from 'react';
import { Button } from "@/components/ui/button";
import SparkleElement from './SparkleElement';

const HeroSection = () => {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Layered atmospheric backgrounds */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Soft radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/2 via-transparent to-primary/2"></div>
      </div>

      {/* Animated sparkle elements */}
      <SparkleElement className="top-1/4 left-1/4 text-accent" delay={0} />
      <SparkleElement className="top-1/3 right-1/4 text-primary" delay={1} />
      <SparkleElement className="bottom-1/3 left-1/3 text-accent" delay={2} />
      <SparkleElement className="bottom-1/4 right-1/3 text-primary" delay={0.5} />
      
      {/* Content with subtle glow backdrop */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in relative">
          {/* Soft glow behind main heading */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl rounded-3xl"></div>
          
          <div className="relative backdrop-blur-[1px] bg-background/20 rounded-3xl p-8 md:p-12 border border-white/5">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
              Hi. I'm{' '}
              <span className="text-primary relative">
                Aditya
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg -z-10"></div>
              </span>
              <span className="text-accent">.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 animate-slide-up">
              A{' '}
              <span className="text-primary font-semibold relative">
                Software Developer
                <div className="absolute inset-0 bg-primary/10 blur-lg rounded-lg -z-10"></div>
              </span>
              <span className="text-accent">.</span>
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up">
                With four years at Google, I've navigated the worlds of big tech and startups, 
                driven by a passion for solving complex problems. I thrive on building, learning, 
                and sharing my journey in tech, AI, and life. Currently exploring the frontiers 
                of Artificial Intelligence and its power to change our world.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-lg -z-10"></div>
              <Button 
                onClick={scrollToJourney}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium hover-lift animate-scale-in relative z-10"
              >
                My Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;