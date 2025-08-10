import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
const Blog = () => {
  const navigate = useNavigate();
  const posts = getAllPosts();

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <Helmet>
        <title>All Notes – Blog | Aditya Raj Singh</title>
        <meta name="description" content="Thoughts, insights, and learnings on AI, development, and career from Aditya Raj Singh." />
        <link rel="canonical" href={window.location.origin + '/blog'} />
      </Helmet>
      
      <main className="pt-20 bg-gradient-journey">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              onClick={handleBackToHome}
              className="mb-6 hover:bg-accent/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                All Notes
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thoughts, insights, and learnings from my journey in tech and beyond. 
                A collection of ideas worth sharing.
              </p>
            </div>
          </div>

          {/* Blog Posts List */}
          <div className="max-w-4xl mx-auto">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                onClick={() => handlePostClick(post.slug)}
                showTags={true}
                layout="horizontal"
              />
            ))}
          </div>

          {/* Load More (Future Enhancement) */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              More posts coming soon. Stay tuned for updates on AI, development, and career insights.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;