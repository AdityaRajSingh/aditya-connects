import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter, Calendar } from "lucide-react";
import SparkleElement from './SparkleElement';

const ConnectSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adityaraj-singh/",
      description: "Professional network and career updates",
      gradient: "bg-gradient-teal"
    },
    {
      icon: Calendar,
      label: "Topmate",
      href: "https://topmate.io/aditya_raj_singh",
      description: "Book a 1:1 session to chat",
      gradient: "bg-gradient-purple"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/adityaraj_singh",
      description: "Thoughts, updates, and tech insights",
      gradient: "bg-gradient-teal"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@adityaraj.dev",
      description: "Direct message for collaborations",
      gradient: "bg-gradient-teal"
    }
  ];

  return (
    <section id="connect" className="py-20 relative overflow-hidden">
      {/* Hero-style layered background system */}
      <div className="absolute inset-0 bg-gradient-layered"></div>
      <div className="absolute inset-0 bg-gradient-depth opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background/50 to-accent/8"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-40"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      
      {/* Animated sparkle elements */}
      <SparkleElement className="hidden sm:block top-[25%] left-[12%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[70%] right-[15%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[50%] right-[8%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[25%] left-[25%] text-primary/80" delay={1.5} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'd love to explore ideas, share challenges, discuss different career paths, 
            or simply connect over topics like finance, sports, startups, or life lessons. 
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <Card key={index} className="hover-lift bg-card border-border group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center">
                    <link.icon className="w-6 h-6 icon-contrast" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  onClick={() => window.open(link.href, '_blank')}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;