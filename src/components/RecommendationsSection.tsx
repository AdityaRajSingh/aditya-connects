import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import SparkleElement from './SparkleElement';

const RecommendationsSection = () => {
  const recommendations = [
    {
      text: "Aditya is one of the most dedicated and insightful engineers I've worked with. His ability to tackle complex problems is second to none.",
      author: "Sarah Chen",
      title: "Senior Engineering Manager",
      company: "Google",
      gradient: "bg-gradient-purple"
    },
    {
      text: "His passion for technology and his entrepreneurial spirit are truly inspiring. A great mentor and friend.",
      author: "Michael Rodriguez",
      title: "CTO",
      company: "TechStart Inc.",
      gradient: "bg-gradient-teal"
    },
    {
      text: "Working with Aditya has been a pleasure. His technical expertise combined with his collaborative nature makes him an exceptional team member.",
      author: "Emily Johnson",
      title: "Product Manager",
      company: "Google",
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Testimonial-focused background for trust and warmth */}
      <div className="absolute inset-0 bg-gradient-recommendations"></div>
      
      {/* Enhanced texture overlay for contrast */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      
      {/* Animated sparkle elements */}
      <SparkleElement className="hidden sm:block top-[15%] left-[10%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[80%] right-[12%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[40%] right-[20%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[15%] left-[15%] text-primary/80" delay={1.5} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kind Words
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What colleagues and collaborators have to say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <Card key={index} className="hover-lift bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 icon-contrast" />
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{rec.text}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{rec.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {rec.title} at {rec.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;