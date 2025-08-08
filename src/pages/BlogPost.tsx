import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShareFooter from '@/components/ShareFooter';
import { getPostBySlug, formatDate, getBlogIcon, type BlogPost } from '@/lib/blog';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        // In a real app, you'd fetch the markdown content here
        // For now, we'll use sample content
        loadSampleContent(slug);
      } else {
        navigate('/blog');
      }
    }
  }, [slug, navigate]);

  const loadSampleContent = async (postSlug: string) => {
    // In a real implementation, you'd fetch the markdown file and parse it
    // For this demo, we'll show structured content
    const sampleContent = `
# ${post?.title || 'Blog Post'}

This is where the full blog post content would be rendered. In a production implementation, you would:

1. **Fetch Markdown Files**: Load content from your \`src/content/posts/\` directory
2. **Parse with MDX**: Use libraries like \`next-mdx-remote\` or \`@mdx-js/react\` 
3. **Syntax Highlighting**: Add code highlighting with \`prism.js\` or \`highlight.js\`
4. **Image Optimization**: Optimize images for web delivery

## Key Features Implemented

- ✅ Dynamic routing for blog posts
- ✅ Clean, readable typography  
- ✅ Social sharing functionality
- ✅ Responsive design
- ✅ Consistent theming with main site

## Sample Code Block

\`\`\`javascript
// Example of how blog routing works
const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
};
\`\`\`

## Next Steps

To complete the blog system:
1. Set up MDX processing
2. Add search functionality  
3. Implement categories/tags filtering
4. Add reading time estimates
5. Consider adding comments (via third-party service)

The foundation is now in place for a fully-featured blog!
    `;
    setContent(sampleContent);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 hover:bg-accent/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Hero Image */}
          <div className="h-48 rounded-lg overflow-hidden mb-8 shadow-lg">
            {post.heroImage ? (
              <img 
                src={post.heroImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-teal flex items-center justify-center">
                    <span className="text-2xl">{getBlogIcon(post.title)}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground/80">{post.title}</h2>
                </div>
              </div>
            )}
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Aditya Raj Singh</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-muted-foreground leading-relaxed space-y-6">
              {/* Excerpt */}
              <p className="text-xl leading-relaxed text-foreground/80 border-l-4 border-primary pl-6 italic">
                {post.excerpt}
              </p>
              
              {/* Sample Content - In production, this would be parsed markdown */}
              <div className="space-y-6 text-foreground/90">
                <p>
                  This is where the full blog post content would be rendered. In a production 
                  implementation, you would parse markdown or MDX files to create rich, 
                  interactive content.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Key Features Implemented
                </h2>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dynamic routing for individual blog posts</li>
                  <li>Clean, readable typography optimized for long-form content</li>
                  <li>Social sharing functionality with copy-to-clipboard</li>
                  <li>Responsive design that works on all devices</li>
                  <li>Consistent theming with the main website</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Technical Implementation
                </h2>
                
                <p>
                  The blog system is built with React Router for dynamic routing, 
                  a simple content management system for post metadata, and a clean 
                  component architecture that makes it easy to extend and customize.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-foreground mb-3">Next Steps for Production</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm">
                    <li>Set up MDX processing for rich content</li>
                    <li>Add search and filtering functionality</li>
                    <li>Implement reading time estimates</li>
                    <li>Add SEO meta tags for each post</li>
                    <li>Consider integrating with a headless CMS</li>
                  </ol>
                </div>
                
                <p>
                  The foundation is now in place for a fully-featured blog that can 
                  scale with your content needs while maintaining the clean, 
                  professional aesthetic of your portfolio.
                </p>
              </div>
            </div>
          </div>

          {/* Share Footer */}
          <ShareFooter title={post.title} url={currentUrl} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;