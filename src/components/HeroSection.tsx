import React from 'react';
import { Button } from "@/components/ui/button";
import SparkleElement from './SparkleElement';

const HeroSection = () => {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated sparkle elements */}
      <SparkleElement className="top-1/4 left-1/4 text-accent" delay={0} />
      <SparkleElement className="top-1/3 right-1/4 text-primary" delay={1} />
      <SparkleElement className="bottom-1/3 left-1/3 text-accent" delay={2} />
      <SparkleElement className="bottom-1/4 right-1/3 text-primary" delay={0.5} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            Hi. I'm{' '}
            <span className="text-primary">Aditya</span>
            <span className="text-accent">.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 animate-slide-up">
            A{' '}
            <span className="text-primary font-semibold">Software Developer</span>
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
          
          <Button 
            onClick={scrollToJourney}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium hover-lift animate-scale-in"
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