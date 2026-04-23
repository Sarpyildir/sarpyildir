export const personalInfo = {
  name: 'Sarp Yıldırım',
  title: 'Full-Stack Developer',
  subtitle: 'Building enterprise-grade systems with Java/Spring Boot & React',
  email: 'sarpyildir2@gmail.com',
  github: 'https://github.com/sarpyildir',
  linkedin: 'https://www.linkedin.com/in/sarp-y%C4%B1ld%C4%B1r%C4%B1m-9625a01b3/',
  location: 'Ankara - Istanbul, Turkey',
  tagline: 'Early adopter of AI-augmented development',
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  current: boolean
  description: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Garanti BBVA Teknoloji',
    role: 'Junior Software Developer',
    period: '2025 – Present',
    current: true,
    description: [
      'Developing and maintaining enterprise-level banking applications serving millions of users across Turkey',
      'Integrated AI tools (GitHub Copilot, Claude, Windsurf) into daily workflow, achieving ~30% improvement in delivery speed',
      'Architecting microservices with Java/Spring Boot and building React frontends for internal tooling',
      'Championing code quality standards through SonarQube gates and thorough peer reviews',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Jenkins', 'SonarQube'],
  },
  {
    id: 2,
    company: 'Yapı Kredi',
    role: 'Part-time Software Developer',
    period: '2024 – 2025',
    current: false,
    description: [
      'Built and enhanced core banking features for one of Turkey\'s top five largest private banks',
      'Designed RESTful APIs consumed by both mobile and web client teams',
      'Implemented CI/CD pipelines reducing deployment time and increasing release confidence',
      'Participated in on-call rotations and contributed to incident post-mortems',
    ],
    tech: ['Java', 'Spring Boot', 'Oracle DB', 'Jenkins', 'REST APIs', 'PL/SQL'],
  },
  {
    id: 3,
    company: 'Softtech',
    role: 'Software Developer Intern',
    period: '2023 (3 months)',
    current: false,
    description: [
      'Delivered financial software solutions for multiple Turkish banking clients under strict compliance requirements',
      'Contributed full-stack features using Java backend paired with modern frontend frameworks',
      'Optimized critical database queries, cutting average query execution time significantly',
    ],
    tech: ['Java', 'JavaScript', 'SQL', 'Spring', 'REST APIs'],
  },
]

export interface SkillItem {
  name: string
  color?: string
}

export interface AITool {
  name: string
  description: string
  icon: string
}

export const skills = {
  languages: [
    { name: 'Java', color: '#F89820' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3776AB' },
    { name: 'SQL', color: '#336791' },
    { name: 'JavaScript', color: '#F7DF1E' },
  ] as SkillItem[],
  frameworks: [
    { name: 'Spring Boot', color: '#6DB33F' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'Express.js', color: '#8A8A8A' },
  ] as SkillItem[],
  tools: [
    { name: 'Jenkins' },
    { name: 'SonarQube' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'Oracle DB' },
    { name: 'Jira' },
  ] as SkillItem[],
  aiTools: [
    { name: 'GitHub Copilot', description: 'Inline code completion & smart suggestions across the entire codebase', icon: '⚡' },
    { name: 'Claude', description: 'Architecture reviews, complex refactoring, and deep problem-solving sessions', icon: '🧠' },
    { name: 'Windsurf', description: 'AI-native IDE enabling autonomous multi-file edits and context-aware generation', icon: '🏄' },
  ] as AITool[],
}

export interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  stack: string
  highlights: string[]
  github: string
  live: string | null
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'CampusConnect',
    description:
      'A full-stack social platform for university students to connect, share academic resources, and collaborate on projects in real time.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT'],
    stack: 'MERN Stack',
    highlights: [
      'Real-time messaging & notifications via WebSockets',
      'Resource sharing with cloud file uploads',
      'Event & study-group management system',
    ],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    name: 'Ticketiser',
    description:
      'Event ticketing platform featuring dynamic pricing, QR code generation, and a seamless end-to-end payment flow.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Stripe API', 'Redis'],
    stack: 'Python / React',
    highlights: [
      'Dynamic pricing engine with demand-based algorithms',
      'QR-coded e-ticket generation and validation',
      'Stripe payment gateway integration',
    ],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    name: 'Movie Recommendation System',
    description:
      'JavaFX desktop application that learns user preferences over time and surfaces personalised movie recommendations via collaborative filtering.',
    tech: ['Java', 'JavaFX', 'SQLite', 'Collaborative Filtering'],
    stack: 'Java Desktop',
    highlights: [
      'User-based collaborative filtering algorithm',
      'Rich, responsive desktop UI built with JavaFX',
      'Local SQLite persistence for preference history',
    ],
    github: '#',
    live: null,
    featured: true,
  },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Bilkent University',
  location: 'Ankara, Turkey',
  period: '2020 – 2025',
  gpa: '3.22 / 4.00',
  highlights: [
    'Core coursework: Algorithms, Data Structures, Distributed Systems, Database Systems, Software Architecture',
    'Senior capstone: Collaborative recommendation engine deployed as a campus-wide web service',
  ],
}

export const terminalLines = [
  { delay: 0, type: 'command' as const, content: 'whoami' },
  { delay: 600, type: 'output' as const, content: 'Sarp Yıldırım  —  Full-Stack Developer @ Garanti BBVA' },
  { delay: 1200, type: 'output' as const, content: 'Ankara - Istanbul, Turkey  ·  Also open to remote opportunities' },
  { delay: 1900, type: 'command' as const, content: 'cat skills.json' },
  { delay: 2500, type: 'output' as const, content: '{' },
  { delay: 2600, type: 'output' as const, content: '  "languages":   ["Java", "TypeScript", "Python", "SQL"],' },
  { delay: 2700, type: 'output' as const, content: '  "frameworks":  ["Spring Boot", "React", "Node.js"],' },
  { delay: 2800, type: 'output' as const, content: '  "ai_tools":    ["GitHub Copilot", "Claude", "Windsurf"],' },
  { delay: 2900, type: 'output' as const, content: '  "speed_boost":  "~30% faster than baseline"' },
  { delay: 3000, type: 'output' as const, content: '}' },
  { delay: 3600, type: 'command' as const, content: 'git log --oneline -3' },
  { delay: 4200, type: 'hash' as const, content: 'a4f2e1b  feat: implement AI-assisted code review pipeline' },
  { delay: 4400, type: 'hash' as const, content: '7b3c9d2  perf: optimise microservice throughput by 40%' },
  { delay: 4600, type: 'hash' as const, content: '2e8f5a4  feat: add real-time event streaming with WebSockets' },
  { delay: 5200, type: 'command' as const, content: 'echo $STATUS' },
  { delay: 5800, type: 'success' as const, content: '✓  Available for new challenges' },
]
