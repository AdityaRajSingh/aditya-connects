export const siteContent = {
  hero: {
    // legacy combined strings (kept for compatibility)
    title: "Hi, I'm Aditya.",
    subtitle: "A Software Developer.",
    kicker: "AI-first builder & lifelong learner",

    // subtitleVariants: three variants for the animated subtitle (HTML strings allowed)
    // keep styling classes inside the strings so the highlight matches current appearance
    subtitleVariants: [
      `A <span class="text-primary font-semibold">Software Developer</span>`,
      `Entrepreneurial Mindset`,
      `Driven by <span class="text-primary font-semibold">AI & Curiosity</span>`
    ],

    // structured fields used for styling in the content-refresh branch
    titlePrefix: "Hi, I'm",
    name: "Aditya",
    titleSuffix: ".",

    subtitlePrefix: 'A',
    subtitleMain: 'Software Developer',
    subtitleSuffix: '.',

    body:
      "With four years at Google, I've navigated the worlds of big tech and startups, driven by a passion for solving complex problems. I thrive on building, learning, and sharing my journey in tech, AI, and life. Currently exploring the frontiers of Artificial Intelligence and its power to change our world.",

    cta: { label: 'My Journey', href: '#journey' },
  },

  journey: {
    heading: "My Journey",
    subheading:
      "From campus labs to startup chaos to global‑scale systems at Google—driven by curiosity, adaptability, and the thrill of building.",
    timeline: [
      {
        title: "Google",
        role: "Software Developer",
        period: "2020 – Present",
        body:
          "Working on large‑scale systems that touch millions, while exploring AI’s potential and honing a builder’s mindset for the next entrepreneurial leap."
      },
      {
        title: "Startup Journey",
        role: "Founding Engineer",
        period: "2018",
        body:
          "Built from zero to one—rapid iteration, many hats, and creating something from nothing. Learned resilience, adaptability, and product thinking."
      },
      {
        title: "Computer Science Engineering",
        role: "University Education",
        period: "2015 – 2019",
        body:
          "Strengthened foundations in algorithms, systems, and software engineering. Discovered a passion for building solutions that matter."
      }
    ]
  },

  building: {
    heading: "What I’m Building",
    subheading:
      "Where passion meets execution—current projects, experiments, and startup ideas.",
    items: [
      {
        title: "AI‑Powered Code Assistant",
        status: "In Development",
        body:
          "An intelligent coding companion that blends AI with developer workflows for smarter, faster solutions.",
        tech: ["Python", "OpenAI", "React"],
        icon: "code",
        color: "gradient-purple",
        links: {
          repo: null,
          demo: null
        }
      },
      {
        title: "Financial Markets Dashboard",
        status: "Planning",
        body:
          "A real‑time dashboard to track markets, analyze portfolios, and surface investment insights.",
        tech: ["Next.js", "D3.js", "APIs"],
        icon: "lightbulb",
        color: "gradient-teal",
        links: {
          repo: null,
          demo: null
        }
      },
      {
        title: "Travel & Photography Platform",
        status: "Conceptualizing",
        body:
          "A hub for travelers and photographers to share stories, tips, and inspiration.",
        tech: ["React", "Firebase", "Maps API"],
        icon: "lightbulb",
        color: "gradient-warm",
        links: {
          repo: null,
          demo: null
        }
      }
    ],
    cta: { label: "Let’s Build Together", href: "#connect" }
  },

  recommendations: {
    heading: "Kind Words",
    subheading: "What peers and collaborators say about working with me.",
    quotes: [
      {
        quote:
          "Aditya brings rare clarity and dedication to every project. His ability to simplify complexity is unmatched.",
        author: "Sarah Chen",
        role: "Senior Engineering Manager, Google"
      },
      {
        quote:
          "His entrepreneurial drive and deep technical insight make him an inspiring partner to build with.",
        author: "Michael Rodriguez",
        role: "CTO, TechStart Inc."
      },
      {
        quote:
          "Aditya’s collaborative approach turns challenges into growth opportunities for the entire team.",
        author: "Emily Johnson",
        role: "Product Manager, Google"
      }
    ]
  },

  connect: {
    heading: "Let’s Connect",
    body:
      "Always up for a good conversation—brainstorming startup ideas, swapping AI experiments, or sharing travel stories.",
    links: [
      {
        label: "LinkedIn",
        desc: "Professional updates & network",
        href: "https://www.linkedin.com/in/adityaraj-singh/"
      },
      {
        label: "Topmate",
        desc: "Book a 1:1 session",
        href: "https://topmate.io/aditya_raj_singh"
      },
      {
        label: "Twitter",
        desc: "Thoughts, tech, and experiments",
        href: "<TODO: twitter link>"
      },
      {
        label: "Email",
        desc: "Let’s collaborate",
        href: "mailto:<TODO: your@email>"
      }
    ]
  },

  about: {
    heading: "I’m Aditya.",
    subheading:
      "A software engineer at Google, building for scale while chasing entrepreneurial dreams.",
    intro:
      "Over the past four years, I’ve worked across startups and big tech—coding, designing, scaling, and learning. My work spans frontend, backend, and UX, all driven by one thread: solving meaningful problems. Today, I’m exploring AI’s transformative potential and laying the groundwork for new ventures.",
    principlesHeading: "What Drives Me",
    principles: [
      { title: "Build It", body: "Learn by creating. Ideas matter most when they’re real." },
      { title: "Collaborate", body: "The best ideas emerge when diverse minds work together." },
      { title: "Accessible Always", body: "Tech should empower the many, not the few." },
      { title: "Keep Experimenting", body: "Every project is a chance to learn, pivot, or grow." }
    ],
    narrative:
      "Before product development, I cut my teeth writing for the web—even HTML emails. From pixel‑perfect layouts to systems at scale, I learned that great tech isn’t just code—it’s impact. Travel keeps me curious, sports keep me resilient, and finance & philosophy keep me reflective. Whether building in code or on paper, the goal is the same: create something that helps others and lasts.",
    beyondHeading: "Beyond Code",
    beyondBullets: [
      "Capturing landscapes through photography",
      "Exploring new cities",
      "Diving into financial markets",
      "Geeking out on philosophy and life design"
    ]
  },

  footer: {
    name: "Aditya Raj Singh",
    tagline: "Software Developer, Builder, and Lifelong Learner",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/adityaraj-singh/" },
      { label: "GitHub", href: "https://github.com/AdityaRajSingh" },
      { label: "Topmate", href: "https://topmate.io/aditya_raj_singh" },
      { label: "Twitter", href: "https://x.com/adityaraj_ars" },
      { label: "Email", href: "mailto:adi4adityaraj@gmail.com" }
    ],
    navigation: [
      { label: "About", href: "/about", external: false },
      { label: "Blog", href: "/blog", external: false },
      { label: "Journey", href: "#journey", external: false },
      { label: "Work", href: "#building", external: false },
      { label: "Connect", href: "#connect", external: false }
    ],
    copyright: `© ${new Date().getFullYear()} Aditya Raj Singh. All rights reserved.`,
    builtWith: {
      textBefore: "Built with React and",
      icon: "heart", // lucide-react <Heart />
      textAfter: "for code"
    }
  }
} as const;

export type FooterNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteContent = typeof siteContent;

export type BuildingItem = {
  title: string;
  status: "In Development" | "Planning" | "Conceptualizing";
  body: string;
  tech: string[];
  icon?: "code" | "lightbulb" | "github";
  color?: "gradient-purple" | "gradient-teal" | "gradient-warm";
  links?: { repo?: string | null; demo?: string | null };
};

