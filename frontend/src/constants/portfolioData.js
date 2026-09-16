export const PORTFOLIO_DATA = {
  profile: {
    name: "SHAILY GUPTA",
    role: "Software Developer | Full-Stack Developer | AI/ML Developer | Tech Educator",
    location: "Mumbai, India",
    email: "shailygupta2515@gmail.com",
    tagline: "I build digital products that turn ideas into reality.",
    subtagline:
      "I design and develop modern websites, full-stack applications, dashboards and AI-powered products for businesses, startups and creators.",
    availability: "Available for freelance projects",
    socials: {
      github: "https://github.com/Shaily-62",
      linkedin: "https://www.linkedin.com/in/shaily-gupta62/",
      instagram: "https://www.instagram.com/code_fuelup/",
      emailMailto: "mailto:shailygupta2515@gmail.com",
    },
  },

  services: [
    {
      id: "business-websites",
      title: "Business Websites",
      price: "Starting at ₹5,000",
      description:
        "Modern, responsive websites designed to help businesses establish a strong online presence and turn visitors into customers.",
      includes: [
        "Responsive design",
        "Up to 5 pages",
        "Contact forms",
        "Mobile optimization",
        "Basic deployment",
      ],
    },
    {
      id: "react-apps",
      title: "React Web Applications",
      price: "Starting at ₹10,000",
      description:
        "Interactive and scalable React applications with clean interfaces and API integrations.",
      includes: [
        "React development",
        "Responsive UI",
        "API integration",
        "Interactive components",
        "Modern frontend architecture",
      ],
    },
    {
      id: "fullstack-apps",
      title: "Full-Stack Applications",
      price: "Starting at ₹15,000",
      description:
        "Complete web applications with frontend, backend, APIs, databases and authentication.",
      includes: [
        "React frontend",
        "Node/Express or FastAPI backend",
        "REST APIs",
        "Database integration",
        "Authentication",
      ],
    },
    {
      id: "ai-apps",
      title: "AI-Powered Applications",
      price: "Starting at ₹15,000",
      description:
        "Practical AI features integrated into real products instead of AI demos that nobody uses.",
      includes: [
        "AI API integration",
        "LLM features",
        "RAG applications",
        "AI chatbots",
        "Backend AI integration",
      ],
    },
    {
      id: "custom-projects",
      title: "Custom Projects",
      price: "Let's Discuss",
      description:
        "Have a unique idea? Let's discuss the requirements and create a solution around your goals.",
      includes: [
        "Tailored architecture",
        "Scope analysis & planning",
        "Custom tech stack",
        "Full lifecycle support",
        "1-on-1 strategy sessions",
      ],
    },
  ],

  audience: [
    {
      title: "Small Businesses",
      desc: "Establishing high-converting web presences to systematically acquire new customers.",
    },
    {
      title: "Startups",
      desc: "Building MVPs quickly and robustly to validate concepts and secure early traction.",
    },
    {
      title: "Creators & Brands",
      desc: "Translating online presence into polished custom platforms and engaging products.",
    },
    {
      title: "Early-Stage Builders",
      desc: "Transforming raw ideas into production-ready full-stack and AI applications.",
    },
  ],

  projects: [
    {
      id: "finpilot",
      title: "FINPILOT",
      category: "AI • FinTech • Full-Stack • Dashboard",
      shortDescription:
        "An AI-powered financial operations platform designed to help businesses understand payments, reconciliation, settlements, refunds and cash flow.",
      problem:
        "Businesses often struggle with fragmented payment streams, delayed reconciliation, unpredictable cash flow, and manual refund monitoring across multiple payment gateways.",
      solution:
        "FinPilot unifies transactional workflows into a real-time dashboard powered by machine learning algorithms for cash flow forecasting and an interactive AI financial assistant.",
      features: [
        "Payment reconciliation",
        "Financial dashboard",
        "Settlement tracking",
        "Refund monitoring",
        "Cash-flow forecasting",
        "AI financial assistant",
        "Razorpay integration",
      ],
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "FastAPI",
        "Supabase",
        "Python",
        "Machine Learning",
      ],
      myRole:
        "End-to-end Design, Architecture, Backend API Development & AI Integration",
      liveDemo: null, // Set clear placeholder variable
      github: "https://github.com/Shaily-62",
    },
    {
      id: "careerlift",
      title: "CAREERLIFT",
      category: "AI • Career Platform • Full-Stack",
      shortDescription:
        "An AI-powered career platform that helps users understand skill gaps, analyze job descriptions and improve their job-readiness.",
      problem:
        "Job seekers waste hundreds of hours applying blindly without knowing if their resume matches ATS requirements or what exact technical skills they lack.",
      solution:
        "CareerLift uses RAG workflows and NLP to parse resumes against real-time job descriptions, delivering instant skill gap assessments and tailored mock interview support.",
      features: [
        "Resume analysis",
        "Job description analysis",
        "Skill-gap detection",
        "Job recommendations",
        "ATS resume generation",
        "AI interview preparation",
        "RAG-based chatbot",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "AI/ML",
        "RAG",
      ],
      myRole:
        "Full-Stack Development, RAG Pipeline Implementation & UI/UX Design",
      liveDemo: null,
      github: "https://github.com/Shaily-62",
    },
    {
      id: "mindbloom",
      title: "MINDBLOOM",
      category: "AI/ML • Education • Accessibility",
      shortDescription:
        "An adaptive learning platform designed to support children through personalized educational games and AI-assisted learning insights.",
      problem:
        "Standard educational tools do not adapt to individual learning speeds or handwriting difficulties, making early diagnostic tracking hard for parents.",
      solution:
        "MindBloom utilizes explainable machine learning models to analyze learning behaviors and handwriting, offering actionable insights through a centralized parent dashboard.",
      features: [
        "Parent dashboard",
        "Child profiles",
        "Adaptive games",
        "Handwriting analysis",
        "ML predictions",
        "Explainable AI",
        "Learning insights",
      ],
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "FastAPI",
        "Supabase",
        "Scikit-learn",
        "XGBoost",
        "Random Forest",
        "SVM",
        "SHAP",
        "Grad-CAM",
      ],
      myRole:
        "Machine Learning Model Training, Explainable AI Integration & React Frontend",
      liveDemo: null,
      github: "https://github.com/Shaily-62",
    },
    {
      id: "food-rescue-network",
      title: "FOOD RESCUE NETWORK",
      category: "Full-Stack • Social Impact • Multi-Role Platform",
      shortDescription:
        "A platform connecting food providers, NGOs and volunteers to coordinate surplus food redistribution.",
      problem:
        "Massive amounts of edible surplus food are wasted daily due to lack of real-time coordination between restaurants, volunteers, and shelters.",
      solution:
        "A multi-dashboard application with live status updates and geolocation tracking to seamlessly route food donations directly to verified NGOs.",
      features: [
        "Provider dashboard",
        "NGO dashboard",
        "Volunteer dashboard",
        "Food listings",
        "Delivery coordination",
        "Impact dashboard",
        "Meals rescued tracking",
        "Environmental impact tracking",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Supabase"],
      myRole: "Full-Stack Development & Database Architecture",
      liveDemo: null,
      github: "https://github.com/Shaily-62",
    },
  ],

  skills: {
    Languages: ["Java", "JavaScript", "Python", "SQL"],
    Frontend: ["React", "Vite", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    Database: ["Supabase", "PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    "AI / ML": [
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "SVM",
      "SHAP",
      "RAG",
      "LLM APIs",
    ],
    Tools: ["Git", "GitHub", "Docker", "Postman"],
  },

  process: [
    {
      step: "01",
      name: "DISCOVER",
      text: "Understand your business, users, goals and requirements.",
    },
    {
      step: "02",
      name: "PLAN",
      text: "Define the features, scope, timeline and technical approach.",
    },
    {
      step: "03",
      name: "BUILD",
      text: "Design, develop, integrate and test the product.",
    },
    {
      step: "04",
      name: "LAUNCH",
      text: "Deploy the final product and hand it over ready to use.",
    },
  ],

  trustPoints: [
    {
      title: "Full-Stack Development",
      desc: "Building modular, robust frontend interfaces paired seamlessly with reliable backend APIs.",
    },
    {
      title: "AI/ML Integration",
      desc: "Incorporating real, functional ML algorithms, RAG pipelines, and LLMs into daily business tools.",
    },
    {
      title: "Hackathon Experience",
      desc: "Proven track record of building and delivering working products under tight time constraints.",
    },
    {
      title: "Open Source Contributions",
      desc: "Writing clean, readable code structured with public transparency and industry best practices.",
    },
    {
      title: "Technical Content Creator",
      desc: "Explaining complex concepts daily gives me a deep clarity on system design and maintainability.",
    },
  ],

  faqs: [
    {
      q: "How much does a project cost?",
      a: "Projects start from the listed prices, but the final quote depends on scope, features, integrations, design requirements and timeline.",
    },
    {
      q: "How long does a project take?",
      a: "Timeline depends on the project's scope and complexity. After understanding the requirements, I can provide a realistic estimate.",
    },
    {
      q: "Can you work with an existing design?",
      a: "Yes. I can convert existing Figma or other design references into responsive web applications.",
    },
    {
      q: "Can you build both frontend and backend?",
      a: "Yes. I can build complete full-stack applications including frontend, backend APIs, authentication and databases.",
    },
    {
      q: "Can you integrate AI into an existing application?",
      a: "Yes. I can integrate practical AI features such as AI assistants, document Q&A, RAG workflows and LLM-powered functionality.",
    },
    {
      q: "Can you handle deployment?",
      a: "Yes. Deployment and environment configuration can be included depending on the project requirements.",
    },
    {
      q: "Do you provide revisions?",
      a: "Yes. Revision terms should be defined according to the project scope and proposal.",
    },
  ],
};
