import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-80 h-80 rounded-3xl overflow-hidden bg-gradient-subtle">
                <img 
                  src={profilePhoto} 
                  alt="Aditya Raj Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="animate-fade-in order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                I'm <span className="text-primary">Aditya</span>.
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary mb-8 font-medium">
                I'm a Software Engineer working remotely from India.
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Over the past 4+ years, I've worked in various areas of digital development, including frontend development, large-scale systems, and app UX/UI. I'm proud to have worn many hats.
                </p>
                <p>
                  Currently, I focus on building things at Google, working with amazing people. Building a startup idea and exploring the entrepreneurial journey.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Google
                </div>
                <div className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  4+ Years
                </div>
                <div className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                  Remote
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">What drives me</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-2">
              Some core values and principles that guide my work and life decisions.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">01</h3>
                  <h4 className="text-2xl font-bold text-foreground mb-4">Build it</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in learning by building. Taking through testing designs working in 
                    the browser as soon as possible. Design happens in the browser and sometimes in code.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">03</h3>
                  <h4 className="text-2xl font-bold text-foreground mb-4">Accessible always</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I aim to make everything I design accessible to all for one main reason - it's the right 
                    thing to do. Accessible products benefit the many, not the few.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">02</h3>
                  <h4 className="text-2xl font-bold text-foreground mb-4">Collaborate</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Good design is not created in a vacuum but rather in a shared space. I love to 
                    brainstorm and share feedback as a team. I believe collaboration will always beat the alternative.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">04</h3>
                  <h4 className="text-2xl font-bold text-foreground mb-4">Keep experimenting</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Everything I create is subject to change and experimentation. Not everything will work, 
                    but it's worth trying - and learning from what doesn't.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Before I stepped into the world of product development, I was a 
                web developer. One of my first jobs involved writing HTML emails. 
                It's a fine bridge email lawyers, lots of walking, hacking and finger 
                crossing that your email arrived in a recipient's inbox at one point.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Coding emails forced me to understand how HTML and CSS 
                play together. My skill set that I've carried and have been in the 
                years since. My daily project work is just an excuse to satisfy 
                my hunger for solving design problems where the building and 
                the world is moving forward.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a big fan of pair-designing with developers, exploring, this was 
                listening to anal playing music, exploring the world with my 
                partner, and playing with my Labradoodle pup, Luca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Beyond Code
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop&crop=faces" 
                  alt="Travel adventure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Travel & Adventure</h3>
                  <p className="text-sm text-white/90">Exploring new places, cultures, and experiences around the world.</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop&crop=faces" 
                  alt="Nature and hiking"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Nature & Hiking</h3>
                  <p className="text-sm text-white/90">Finding peace and inspiration in the great outdoors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;