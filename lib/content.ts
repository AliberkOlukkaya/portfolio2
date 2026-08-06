// Central content source — all portfolio data derived from CV

export const profile = {
  name: "Aliberk Olukkaya",
  role: "Computer Engineer",
  tagline: "Computer Engineer",
  location: "Konya, Türkiye",
  email: "aliberkolukkayaa@gmail.com",
  phone: "+90 530 583 81 77",
  github: "https://github.com/AliberkOlukkaya",
  linkedin: "https://www.linkedin.com/in/aliberk-olukkaya-3a631137a",
  summary:
    "Computer Engineer with hands-on experience in machine learning, deep learning, full-stack development, and AI-powered applications. I build projects that combine Python backends, modern web interfaces, databases, and vision/LLM APIs — seeking AI and data engineering roles where practical software development and rapid learning create measurable value.",
};

export const stats = [
  { value: "3+", label: "Shipped Projects" },
  { value: "2026", label: "B.Sc. Computer Eng." },
  { value: "1", label: "Best Project Award" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Programming",
    items: ["Python", "SQL", "Java", "C", "C#", "JavaScript"],
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
    org: "Central Lecture Halls, Eastern Mediterranean University",
    period: "2024 – 2026",
    points: [
      "Supported daily operations in the university's busiest lecture-hall complex.",
      "Resolved technical issues across computers, projectors, sound systems, and conference-hall equipment.",
    ],
  },
];

export type ProjectScreenshot = {
  /** Path under /public, e.g. "/projects/phoenixdf/dashboard.png" */
  src: string;
  /** Accessible description of the screenshot */
  alt: string;
  /** Optional overlay caption */
  title?: string;
  subtitle?: string;
};

export type Project = {
  /** Stable id — also the folder name under public/projects/<id>/ */
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
  /** Empty until real screenshots are dropped into public/projects/<id>/ */
  screenshots: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    id: "traffic-enforcement",
    title: "AI-Based Traffic Enforcement System",
    subtitle: "Graduation Project",
    year: "2025",
    award: "Best Project Award",
    description:
      "A full-stack traffic-violation platform with role-based access for citizens, police officers, and administrators. Claude Vision AI analyzes uploaded evidence asynchronously to detect phone use, smoking, and seatbelt violations.",
    stack: [
      "Flask",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Claude Vision AI",
    ],
    highlights: [
      "Async AI evidence analysis for violation detection",
      "Role-based access control across three user types",
      "Plate search, dashboards, DB migrations, integration tests",
    ],
    screenshots: [
      {
        src: "/projects/traffic-enforcement/Resim3.png",
        alt: "Admin dashboard showing system statistics with 18 total users, 3 police officers, 14 vehicles, and 18 violations. Includes a 7-day trend chart and violation type distribution bar chart displaying phone, smoking, seatbelt, and speed violations.",
        title: "Admin Dashboard",
        subtitle: "Real-time statistics and violation trends",
      },
      {
        src: "/projects/traffic-enforcement/Resim1.png",
        alt: "Vehicle search interface displaying registered vehicles with plate numbers 34ABC123 and 06ABC567, showing vehicle make, model, year, and pending violation status indicators.",
        title: "Vehicle Management",
        subtitle: "Search and track registered vehicles",
      },
      {
        src: "/projects/traffic-enforcement/Resim2.png",
        alt: "Violation reports table showing timestamped records with plate numbers, location coordinates, violation types (smoking, phone use, seatbelt), and completion status badges.",
        title: "Violation Reports",
        subtitle: "Detailed history of detected violations",
      },
    ],
  },
  {
    id: "phoenixdf",
    title: "PhoenixDF — AI Research Assistant",
    subtitle: "Personal Project",
    year: "2026",
    description:
      "A Python/Flask platform that extracts and analyzes academic PDF content using an LLM API, wrapped in a responsive web interface ready for version control and deployment.",
    stack: ["Python", "Flask", "LLM API", "PDF Processing"],
    highlights: [
      "Summarization and interactive PDF chat",
      "Quiz and flashcard generation from documents",
      "Full document-analysis workflows",
    ],
    screenshots: [
      {
        src: "/projects/phoenixdf/Ekran görüntüsü 2026-08-06 150127.png",
        alt: "Document overview screen displaying PDF statistics for AES_CIPHER.Part2.pdf, showing 1063 pages, 5-minute read time, 0% coverage, and detailed mode. Includes tabs for Summary, Flashcard, Quiz, and Analysis with a table of contents listing key AES cipher topics.",
        title: "Document Analysis",
        subtitle: "Structured PDF overview and content index",
      },
      {
        src: "/projects/phoenixdf/Ekran görüntüsü 2026-08-06 150223.png",
        alt: "AI chat interface showing conversation sidebar with uploaded documents (Tobacco_Ozet.pdf and AES_CIPHER.Part2.pdf) and active chat explaining AES Key Expansion algorithm with detailed breakdown of key generation steps.",
        title: "Interactive PDF Chat",
        subtitle: "Ask questions and get AI-powered answers",
      },
      {
        src: "/projects/phoenixdf/Ekran görüntüsü 2026-08-06 150200.png",
        alt: "Flashcard interface displaying card 6 of 8 with the question 'Describe the key expansion algorithm for AES-128' and a flip button to reveal the answer, part of an interactive study mode.",
        title: "Flashcard Study Mode",
        subtitle: "AI-generated flashcards for active learning",
      },
      {
        src: "/projects/phoenixdf/Ekran görüntüsü 2026-08-06 150211.png",
        alt: "Quiz interface showing multiple-choice questions about AES cipher transformations, including questions on InvSubBytes and InvShiftRows with color-coded correct (green) and incorrect (red) answer feedback.",
        title: "Quiz Assessment",
        subtitle: "Test comprehension with generated quizzes",
      },
    ],
  },
  {
    id: "taskflow-ai",
    title: "TaskFlow AI — Intelligent Task Manager",
    subtitle: "Personal Project",
    year: "2026",
    description:
      "An AI-powered task management application that breaks down complex goals into manageable subtasks, tracks progress with visual analytics, and helps users maintain productivity through smart prioritization and completion tracking.",
    stack: ["React", "TypeScript", "AI API", "Chart.js"],
    highlights: [
      "AI-powered task decomposition and suggestions",
      "Visual progress tracking with charts and metrics",
      "Priority management and completion analytics",
    ],
    screenshots: [
      {
        src: "/projects/taskflow-ai/Ekran görüntüsü 2026-08-06 151603.png",
        alt: "Progress dashboard displaying task statistics: 11 total tasks, 1 completed, 10 pending, 0 high priority. Features a donut chart showing 9% completion rate and a horizontal bar chart breaking down priority levels (low, medium, high).",
        title: "Progress Dashboard",
        subtitle: "Visual analytics and completion tracking",
      },
      {
        src: "/projects/taskflow-ai/Ekran görüntüsü 2026-08-06 151703.png",
        alt: "Task list interface showing 10 tasks with a 30% completion progress bar, search functionality, and filter tabs (All, Pending, Completed, High Priority). Each task displays checkboxes, priority badges (Medium, Waiting), and edit/delete actions.",
        title: "Task Management",
        subtitle: "Organize and filter tasks by priority and status",
      },
      {
        src: "/projects/taskflow-ai/Ekran görüntüsü 2026-08-06 151716.png",
        alt: "AI task breakdown interface with sidebar showing AI tools (Task Breakdown, Priority Suggestions, Daily Plan, Control Panel) and main area for decomposing complex goals into actionable subtasks with suggested templates.",
        title: "AI Task Breakdown",
        subtitle: "Intelligent decomposition of complex tasks",
      },
    ],
  },
  {
    id: "gamescope",
    title: "GameScope — Game Discovery Platform",
    subtitle: "Personal Project",
    year: "2026",
    description:
      "A curated game discovery and recommendation platform that helps users find their next favorite game by aggregating Steam catalog data, real-time pricing, Metacritic scores, and personalized recommendations in a visually engaging interface.",
    stack: ["React", "Next.js", "Steam API", "Tailwind CSS"],
    highlights: [
      "559+ games with real-time pricing and ratings",
      "Advanced filtering by genre, platform, and price",
      "Metacritic score integration and user recommendations",
    ],
    screenshots: [
      {
        src: "/projects/gamescope/Ekran görüntüsü 2026-08-03 111317.png",
        alt: "GameScope homepage featuring a large hero section with the tagline 'Discover your next favorite' over a dramatic game scene. Displays 559 discoverable games, filter controls, and a grid of featured titles including Counter-Strike 2, Age of Empires IV, and Baldur's Gate 3.",
        title: "Game Discovery Hub",
        subtitle: "Curated catalog with 559+ games",
      },
      {
        src: "/projects/gamescope/Ekran görüntüsü 2026-08-03 111327.png",
        alt: "Game catalog view displaying cards for Cyberpunk 2077, The Witcher 3: Wild Hunt, Left 4 Dead 2, Elden Ring, and Red Dead Redemption 2. Each card shows cover art, pricing, discount percentages, Metacritic scores (86-93), and Steam platform badges.",
        title: "Catalog & Pricing",
        subtitle: "Detailed game cards with ratings and prices",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Personal Project",
    year: "2026",
    description:
      "A responsive portfolio presenting AI, machine learning, and software engineering work in a modern case-study format, with project demos, achievements, and GitHub integration.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Modern case-study project presentation",
      "Downloadable CV and GitHub integration",
      "Fully responsive across devices",
    ],
    screenshots: [],
  },
];

export const education = {
  degree: "B.Sc. in Computer Engineering",
  school: "Eastern Mediterranean University",
  period: "2021 – 2026",
  location: "Gazimağusa, KKTC",
};

export const certificates = [
  {
    title: "Best Graduation Project Award",
    org: "Department of Computer Engineering, EMU",
    year: "2026",
  },
];
