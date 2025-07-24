import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, GraduationCap, Rocket } from "lucide-react";

const JourneySection = () => {
  const milestones = [
    {
      year: "2020 - Present",
      title: "Google",
      role: "Software Developer",
      description: "Embracing the scale and complexity of big tech while exploring AI frontiers. Building systems that impact millions while nurturing entrepreneurial ambitions and preparing for the next leap.",
      icon: Building,
      color: "bg-gradient-teal"
    },
    {
      year: "2019",
      title: "Startup Journey",
      role: "Founding Engineer",
      description: "Dove into the startup world to experience building from zero to one. Learned the art of rapid iteration, wearing multiple hats, and the thrill of creating something new. This experience ignited my entrepreneurial spirit.",
      icon: Rocket,
      color: "bg-gradient-purple"
    },
    {
      year: "2016 - 2019",
      title: "Computer Science Engineering",
      role: "University Education",
      description: "Built the foundation with algorithms, data structures, and engineering principles. More importantly, developed a problem-solving mindset and discovered my passion for building technology that matters.",
      icon: GraduationCap,
      color: "bg-gradient-warm"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From college → startups → big tech → entrepreneurial ambitions. A story of continuous learning, risk-taking, and building.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-center mb-12 last:mb-0">
              {/* Timeline line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-20 bg-border"></div>
              )}
              
              {/* Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full ${milestone.color} flex items-center justify-center mr-8`}>
                <milestone.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <Card className="flex-1 hover-lift bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-primary font-medium">{milestone.role}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {milestone.year}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;