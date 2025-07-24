import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost, formatDate } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  onClick?: () => void;
  showTags?: boolean;
  layout?: 'horizontal' | 'vertical';
}

const BlogCard = ({ post, onClick, showTags = false, layout = 'vertical' }: BlogCardProps) => {
  const iconColors = [
    'bg-teal-100 text-teal-600',
    'bg-orange-100 text-orange-600', 
    'bg-purple-100 text-purple-600',
    'bg-green-100 text-green-600',
    'bg-blue-100 text-blue-600',
    'bg-red-100 text-red-600'
  ];
  
  const colorIndex = Math.abs(post.title.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % iconColors.length;
  const iconColor = iconColors[colorIndex];

  if (layout === 'horizontal') {
    return (
      <div 
        className="group flex items-center justify-between py-6 border-b border-border/50 hover:bg-muted/30 transition-all duration-200 cursor-pointer px-4 -mx-4 rounded-lg"
        onClick={onClick}
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            {showTags && post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconColor} ml-6 flex-shrink-0`}>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    );
  }

  // Vertical layout (original with improvements)
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