import React from 'react';
import { Card } from "@/components/ui/card";
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-2 hover-lift bg-card border-border">
              <div className="w-80 h-80 rounded-lg overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Aditya Raj Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
          
          {/* About Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-primary font-medium">problem-solver</span> and 
                an <span className="text-primary font-medium">entrepreneur at heart</span>. 
                My interests are eclectic, from building new products and diving into 
                financial markets to traveling the world and capturing moments through photography.
              </p>
              
              <p>
                I believe in the power of sharing knowledge and am always open to discussing 
                everything from career paths and startup ideas to life lessons and the latest 
                in sports. This space is a reflection of my journey and the things I've learned 
                along the way.
              </p>
              
              <p>
                Currently, I'm fascinated by the potential of <span className="text-accent font-medium">
                Artificial Intelligence</span> and spend my time experimenting with new use cases 
                and building products that leverage AI to solve real-world problems.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Building
              </div>
              <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Learning
              </div>
              <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Traveling
              </div>
              <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Photography
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;