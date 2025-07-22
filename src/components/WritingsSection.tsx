import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const WritingsSection = () => {
  const posts = [
    {
      title: "The AI Revolution: A Developer's Perspective",
      excerpt: "Exploring how artificial intelligence is transforming software development and what it means for the future of our industry.",
      date: "Dec 15, 2024",
      gradient: "bg-gradient-purple"
    },
    {
      title: "From Google to Startups: Key Lessons Learned",
      excerpt: "Insights from navigating both big tech and startup environments, and the valuable lessons that shaped my career.",
      date: "Nov 28, 2024",
      gradient: "bg-gradient-teal"
    },
    {
      title: "The Art of Problem-Solving in Tech",
      excerpt: "A deep dive into effective problem-solving strategies that have helped me tackle complex engineering challenges.",
      date: "Oct 22, 2024",
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <section id="writings" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From My Desk
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and learnings from my journey in tech and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="hover-lift cursor-pointer bg-card border-border group overflow-hidden"
            >
              <div className={`h-2 ${post.gradient}`}></div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingsSection;