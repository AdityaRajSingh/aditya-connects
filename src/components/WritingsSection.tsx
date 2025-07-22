import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '@/components/BlogCard';
import { getRecentPosts } from '@/lib/blog';
import { Button } from '@/components/ui/button';

const WritingsSection = () => {
  const navigate = useNavigate();
  const posts = getRecentPosts(3);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const handleViewAllPosts = () => {
    navigate('/blog');
  };

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
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              onClick={() => handlePostClick(post.slug)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleViewAllPosts}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WritingsSection;