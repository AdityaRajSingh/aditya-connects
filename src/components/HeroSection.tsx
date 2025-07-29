import React from 'react';
import { Button } from "@/components/ui/button";
import SparkleElement from './SparkleElement';

const HeroSection = () => {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Animated sparkle elements - hidden on small screens for performance */}
      <SparkleElement className="hidden sm:block top-1/4 left-1/4 text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-1/3 right-1/4 text-primary" delay={1} />
      <SparkleElement className="hidden sm:block bottom-1/3 left-1/3 text-accent" delay={2} />
      <SparkleElement className="hidden sm:block bottom-1/4 right-1/3 text-primary" delay={0.5} />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Hi. I'm{' '}
            <span className="text-primary">Aditya</span>
            <span className="text-accent">.</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-6 sm:mb-8 animate-slide-up">
            A{' '}
            <span className="text-primary font-semibold">Software Developer</span>
            <span className="text-accent">.</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up px-2">
              With four years at Google, I've navigated the worlds of big tech and startups, 
              driven by a passion for solving complex problems. I thrive on building, learning, 
              and sharing my journey in tech, AI, and life. Currently exploring the frontiers 
              of Artificial Intelligence and its power to change our world.
            </p>
          </div>
          
          <Button 
            onClick={scrollToJourney}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium hover-lift animate-scale-in min-h-[48px] sm:min-h-[52px]"
          >
            My Journey
          </Button>
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      </div>
    </section>
  );
};

export default HeroSection;