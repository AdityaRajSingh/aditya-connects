import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Camera, Plane, TrendingUp, BookOpen, Users, Coffee } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Building & Creating",
      description: "I believe in the power of code to solve real problems and create meaningful experiences. Every line should serve a purpose."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so do I. Always curious, always questioning, always growing. Learning is not a destination but a journey."
    },
    {
      icon: Users,
      title: "Human Connection",
      description: "Behind every great product are great people. I value collaboration, mentorship, and the relationships that make work meaningful."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Challenges are opportunities in disguise. I embrace failure as a learning tool and believe in the compound effect of small improvements."
    }
  ];

  const interests = [
    { icon: Camera, title: "Photography", description: "Capturing moments and stories through the lens" },
    { icon: Plane, title: "Travel", description: "Exploring cultures and gaining new perspectives" },
    { icon: TrendingUp, title: "Finance", description: "Understanding markets and investment strategies" },
    { icon: Coffee, title: "Philosophy", description: "Deep conversations about life and purpose" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Me in <span className="text-primary">Detail</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A deeper dive into who I am, what I believe, and what drives me forward every day.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">My Philosophy</h2>
            <div className="prose prose-lg max-w-none">
              <Card className="bg-muted/30 border-border p-8">
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I believe technology should amplify human potential, not replace it. My journey from a curious computer science student to a Google engineer to an aspiring entrepreneur has taught me that the most impactful solutions come from understanding real human problems deeply.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At Google, I've seen how scale can multiply impact, but I've also learned that innovation often requires the agility and risk-taking mindset that comes from smaller, more nimble environments. This is why I'm drawn to the entrepreneurial path—not just for the freedom, but for the opportunity to build something from nothing and solve problems that matter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm particularly excited about AI not because it's trendy, but because it represents a fundamental shift in how we can approach problem-solving. The key is to remain human-centered while leveraging these powerful tools to create better experiences and outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Beyond Code</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Life is more than just programming. These interests keep me balanced, inspired, and constantly learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <Card key={index} className="hover-lift bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <interest.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Current Focus</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  From Techie to Entrepreneur in Motion
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While I continue to excel in my role at Google, I'm actively preparing for my next chapter as an entrepreneur. I'm exploring AI applications, building side projects, and connecting with fellow builders who share the vision of creating meaningful impact through technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you're working on something interesting, looking for a technical co-founder, or just want to chat about the intersection of technology and human potential, I'd love to connect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;