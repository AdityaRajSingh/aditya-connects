import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Lightbulb } from "lucide-react";

const BuildingSection = () => {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "Building an intelligent code completion tool that understands context and suggests optimized solutions. Currently in stealth mode, exploring various AI models.",
      status: "In Development",
      tech: ["Python", "OpenAI", "React"],
      icon: Code,
      color: "bg-gradient-purple"
    },
    {
      title: "Financial Markets Dashboard",
      description: "A real-time dashboard for tracking market trends, portfolio analysis, and investment insights. Combining my passion for finance with technology.",
      status: "Planning",
      tech: ["Next.js", "D3.js", "APIs"],
      icon: Lightbulb,
      color: "bg-gradient-teal"
    },
    {
      title: "Travel & Photography Platform",
      description: "A platform to share travel stories and photography techniques. Building a community of travelers and photography enthusiasts.",
      status: "Conceptualizing",
      tech: ["React", "Firebase", "Maps API"],
      icon: Lightbulb,
      color: "bg-gradient-warm"
    }
  ];

  return (
    <section id="building" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I'm Building
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current projects and startup ideas where I'm applying my passion for solving problems and creating value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift bg-card border-border group overflow-hidden">
              <div className={`h-2 ${project.color}`}></div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {project.status === "In Development" ? "🚧 Active" : 
                     project.status === "Planning" ? "📋 Planned" : "💡 Concept"}
                  </span>
                  
                  {project.status === "In Development" && (
                    <Button variant="ghost" size="sm" disabled>
                      <Github className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have an interesting problem to solve or want to collaborate?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            Let's Build Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;