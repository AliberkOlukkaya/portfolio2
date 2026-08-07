// Central content source — portfolio data

/* =========================================================
   PROFILE
========================================================= */

export const profile = {
  name: "Aliberk Olukkaya",

  role: "Computer Engineer",

  tagline: "Computer Engineer",

  location: "Konya, Türkiye",

  email: "aliberkolukkayaa@gmail.com",

  phone: "+90 530 583 81 77",

  github: "https://github.com/AliberkOlukkaya",

  linkedin:
    "https://www.linkedin.com/in/aliberk-olukkaya-3a631137a",

  summary:
    "Computer Engineer with hands-on experience in machine learning, deep learning, full-stack development, and AI-powered applications. I build projects that combine Python backends, modern web interfaces, databases, and vision/LLM APIs — seeking AI and data engineering roles where practical software development and rapid learning create measurable value.",
};

/* =========================================================
   STATS
========================================================= */

export const stats = [
  {
    value: "4+",
    label: "Shipped Projects",
  },

  {
    value: "2026",
    label: "B.Sc. Computer Eng.",
  },

  {
    value: "1",
    label: "Best Project Award",
  },
];

/* =========================================================
   SKILLS
========================================================= */

export const skills: {
  group: string;
  items: string[];
}[] = [
  {
    group: "Programming",

    items: [
      "Python",
      "SQL",
      "Java",
      "C",
      "C#",
      "JavaScript",
    ],
  },

  {
    group: "AI & Data",

    items: [
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "LLM APIs",
    ],
  },

  {
    group: "Development",

    items: [
      "Flask",
      "React",
      "REST APIs",
      "PostgreSQL",
      "SQLite",
      "SQLAlchemy",
      "Git",
      "Linux",
    ],
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

export type Experience = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Machine Learning & Deep Learning Intern",

    org: "Anssoft Technology",

    period: "2025",

    location: "Konya, Türkiye",

    points: [
      "Developed ML models with Python and Scikit-learn: preprocessing, feature engineering, classification, and evaluation.",

      "Applied TensorFlow/Keras to deep learning experiments using Kaggle datasets.",
    ],
  },

  {
    role: "Vice President",

    org: "EMU IT Cybersecurity Club",

    period: "2024 – 2025",

    points: [
      "Helped organize technical events and coordinated communication and operational activities within the club.",
    ],
  },

  {
    role: "Administrative Supervisor Assistant",

    org:
      "Central Lecture Halls, Eastern Mediterranean University",

    period: "2024 – 2026",

    points: [
      "Supported daily operations in the university's busiest lecture-hall complex.",

      "Resolved technical issues across computers, projectors, sound systems, and conference-hall equipment.",
    ],
  },
];

/* =========================================================
   PROJECT TYPES
========================================================= */

export type ProjectScreenshot = {
  src: string;

  alt: string;

  title?: string;

  subtitle?: string;
};

export type Project = {
  id: string;

  title: string;

  subtitle: string;

  year: string;

  award?: string;

  description: string;

  stack: string[];

  highlights: string[];

  repositoryUrl?: string;

  liveUrl?: string;

  screenshots: ProjectScreenshot[];
};

/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [
  /* =======================================================
     AI-BASED TRAFFIC ENFORCEMENT SYSTEM
  ======================================================= */

  {
    id: "traffic-enforcement",

    title:
      "AI-Based Traffic Enforcement System",

    subtitle:
      "Graduation Project",

    year:
      "2025",

    award:
      "Best Project Award",

    description:
  "A full-stack traffic enforcement platform that combines role-based workflows, vehicle and violation management, administrative dashboards, and AI-assisted evidence analysis to support a complete digital enforcement process.",

    stack: [
      "Flask",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Claude Vision AI",
    ],

    highlights: [
      "AI-assisted evidence analysis for traffic violations",

      "Role-based workflows for citizens, police and administrators",

      "Vehicle search, violation records and administrative analytics",
    ],

    screenshots: [
      {
        src:
          "/projects/traffic-enforcement/traffic-enforcement-hero.png",

        alt:
          "AI-Based Traffic Enforcement System showing a traffic monitoring interface with vehicle detection, violation analytics and enforcement dashboard.",
      },
    ],
  },

  /* =======================================================
     PHOENIXDF
  ======================================================= */

  {
    id:
      "phoenixdf",

    title:
      "PhoenixDF — AI Research Assistant",

    subtitle:
      "Personal Project",

    year:
      "2026",

    description:
      "An AI-assisted learning workspace for academic PDFs that combines document analysis, RAG-based conversations, summaries, flashcards, quizzes, and source-aware study workflows.",

    stack: [
      "Python",
      "Flask",
      "Next.js",
      "TypeScript",
      "RAG",
      "LLM API",
    ],

    highlights: [
      "RAG-based PDF conversations with document-aware context",

      "AI-generated summaries, flashcards and quizzes",

      "Structured document analysis and study workflows",
    ],

    screenshots: [
      {
        src:
          "/projects/phoenixdf/phoenixdf-hero.png",

        alt:
          "PhoenixDF AI-powered academic PDF learning workspace featuring document analysis, flashcards, quizzes and AI-assisted conversations.",
      },
    ],
  },

  /* =======================================================
     TASKFLOW AI
  ======================================================= */

  {
    id:
      "taskflow-ai",

    title:
      "TaskFlow AI — Intelligent Task Manager",

    subtitle:
      "Personal Project",

    year:
      "2026",

    description:
      "An AI-assisted productivity platform that turns complex goals into actionable tasks, suggests priorities, builds daily plans, and tracks progress through structured workflows and analytics.",

    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "JWT",
      "AI API",
    ],

    highlights: [
      "AI-powered task decomposition and priority suggestions",

      "Daily planning workflows based on active tasks",

      "Progress analytics and structured task management",
    ],

    screenshots: [
      {
        src:
          "/projects/taskflow-ai/taskflow-ai-hero.png",

        alt:
          "TaskFlow AI productivity workspace showing intelligent task planning, AI prioritization and progress analytics.",
      },
    ],
  },

  /* =======================================================
     GAMESCOPE
  ======================================================= */

  {
    id:
      "gamescope",

    title:
      "GameScope — Game Discovery Platform",

    subtitle:
      "Personal Project",

    year:
      "2026",

    description:
      "A game discovery and intelligence platform that brings together catalog metadata, pricing, ratings, filtering, and recommendation-oriented discovery in one experience.",

    stack: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Steam API",
      "RAWG",
      "IGDB",
    ],

    highlights: [
      "Curated catalog containing 559+ discoverable games",

      "Game metadata, pricing and rating aggregation",

      "Advanced discovery through filtering and catalog scoring",
    ],

    screenshots: [
      {
        src:
          "/projects/gamescope/gamescope-hero.png",

        alt:
          "GameScope game discovery platform featuring popular games, prices, discounts, ratings and discovery tools.",
      },
    ],
  },

  /* =======================================================
     PORTFOLIO
  ======================================================= */

  {
    id:
      "portfolio",

    title:
      "Personal Portfolio Website",

    subtitle:
      "Personal Project",

    year:
      "2026",

    description:
      "A responsive personal portfolio designed to present AI, data, and software engineering projects through interactive case-study style sections.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    highlights: [
      "Interactive project showcase",

      "Responsive portfolio experience",

      "Reusable component-driven interface",
    ],

    screenshots: [],
  },
];

/* =========================================================
   EDUCATION
========================================================= */

export const education = {
  degree:
    "B.Sc. in Computer Engineering",

  school:
    "Eastern Mediterranean University",

  period:
    "2021 – 2026",

  location:
    "Gazimağusa, KKTC",
};

/* =========================================================
   CERTIFICATES
========================================================= */

export const certificates = [
  {
    title:
      "Best Graduation Project Award",

    org:
      "Department of Computer Engineering, EMU",

    year:
      "2026",
  },
];