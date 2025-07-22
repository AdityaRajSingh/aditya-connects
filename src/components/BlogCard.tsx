import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost, formatDate } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  onClick?: () => void;
  showTags?: boolean;
}

const BlogCard = ({ post, onClick, showTags = false }: BlogCardProps) => {
  const gradients = [
    "bg-gradient-purple",
    "bg-gradient-teal", 
    "bg-gradient-warm",
    "bg-gradient-rose",
    "bg-gradient-blue",
    "bg-gradient-green"
  ];
  
  const gradientClass = gradients[Math.abs(post.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length];

  return (
    <Card 
      className="hover-lift cursor-pointer bg-card border-border group overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <div className={`h-2 ${gradientClass}`}></div>
      
      {post.heroImage && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.date)}</span>
        </div>
        
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </CardTitle>
        
        {showTags && post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
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
  );
};

export default BlogCard;