// Blog content management utilities

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  heroImage?: string;
  tags: string[];
  content?: string;
}

// Get consistent icon for a blog post based on its title
export function getBlogIcon(title: string): string {
  const blogIcons = ['💡', '🚀', '⚡', '🎯', '🔮', '🌟', '📝', '🎨', '⭐', '🔥'];
  const iconIndex = Math.abs(title.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % blogIcons.length;
  return blogIcons[iconIndex];
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    title: "The AI Revolution: A Developer's Perspective",
    slug: "ai-revolution-developers-perspective", 
    date: "2024-12-15",
    excerpt: "Exploring how artificial intelligence is transforming software development and what it means for the future of our industry.",
    tags: ["AI", "Development", "Technology"]
  },
  {
    title: "From Google to Startups: Key Lessons Learned",
    slug: "google-to-startups-lessons",
    date: "2024-11-28", 
    excerpt: "Insights from navigating both big tech and startup environments, and the valuable lessons that shaped my career.",
    tags: ["Career", "Google", "Startups", "Leadership"]
  },
  {
    title: "The Art of Problem-Solving in Tech",
    slug: "art-of-problem-solving-tech",
    date: "2024-10-22",
    excerpt: "A deep dive into effective problem-solving strategies that have helped me tackle complex engineering challenges.", 
    tags: ["Problem Solving", "Engineering", "Methodology"]
  },
  {
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    date: "2024-09-15",
    excerpt: "Best practices and architectural patterns for creating maintainable React applications that scale with your team.",
    tags: ["React", "Architecture", "Best Practices"]
  },
  {
    title: "The Future of Remote Work in Tech",
    slug: "future-remote-work-tech",
    date: "2024-08-20",
    excerpt: "How remote work is reshaping the tech industry and what it means for developers, teams, and companies.",
    tags: ["Remote Work", "Culture", "Technology"]
  },
  {
    title: "Lessons from Building a Technical Team",
    slug: "lessons-building-technical-team",
    date: "2024-07-18",
    excerpt: "Key insights on hiring, managing, and scaling engineering teams in fast-growing startups.",
    tags: ["Leadership", "Team Building", "Management"]
  }
];

// Get all blog posts
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Get recent posts for homepage
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
}

// Get share URLs
export function getShareUrls(title: string, url: string) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    copyLink: url
  };
}