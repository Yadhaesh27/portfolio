// Resume source: 24 Nov 2026. AEGIS AI is additional portfolio work.
export const profile = {
  name: 'Yadhaeshwar S',
  firstName: 'Yadhaeshwar',
  initials: 'YS',
  title: 'Final-year Computer Science Engineering Student',
  location: 'Tamil Nadu, India',
  email: 'yadhaesh@gmail.com',
  phone: '+91 6381098377',
  linkedin: 'https://www.linkedin.com/in/yadhaeshwar-s',
  github: 'https://github.com/Yadhaesh27',
  githubUsername: 'Yadhaesh27',
  resume: '/Yadhaeshwar_S_Resume.pdf',
  // Optional: place your portrait at public/portrait.jpg and set this to '/portrait.jpg'.
  // Until then, the site uses the genuine public GitHub avatar, with a YS fallback.
  portrait: '',
  institution: 'K. Ramakrishnan College of Technology, Samayapuram',
  degree: 'B.E. Computer Science Engineering',
  graduation: '2027',
  cgpa: '6.9 / 10',
  standingArrears: '0',
  intro: 'I build intelligent software that connects thoughtful experiences with capable engineering.',
  status: 'Open to graduate engineering opportunities',
};

export type ProjectCategory = 'AI / ML' | 'Full stack' | 'Systems';
export type Project = {
  slug: string;
  index: string;
  title: string;
  overline: string;
  category: ProjectCategory;
  summary: string;
  elevator: string;
  tags: string[];
  year: string;
  status: string;
  repo?: string;
  playStore?: string;
  verifiedRepo?: boolean;
  featured?: boolean;
  motif: 'flow' | 'shield' | 'waves' | 'map' | 'scales' | 'pulse';
  theme: 'violet' | 'cyan' | 'teal';
  problem: string;
  approach: string;
  features: string[];
  architecture: { label: string; detail: string }[];
  outcome: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'clientflow-ai', index: '01', title: 'ClientFlow AI', overline: 'THE ENTERPRISE WORKSPACE', category: 'Full stack',
    summary: 'A collaborative client workspace with real-time AI assistance, versioned approvals and intuitive team workflows.',
    elevator: 'Making client delivery feel less fragmented and more intelligent.',
    tags: ['React.js', 'Python', 'FastAPI', 'SQLite', 'Gemini AI', 'SSE'], year: '2026', status: 'Public repository',
    repo: 'https://github.com/Yadhaesh27/ClientFlow-AI', verifiedRepo: true, featured: true, motif: 'flow', theme: 'violet',
    problem: 'Project communication, approvals, and client updates often live in scattered tools. Teams need a shared source of context without losing the nuance of client feedback.',
    approach: 'Designed a multi-tenant interface around project workspaces, Kanban tasks, versioned deliverables and an AI-assisted copilot. React handles the responsive experience, while FastAPI serves project operations and Gemini workflows over streaming responses.',
    features: ['Multi-tenant client and team workspaces', 'Kanban task and approval workflows', 'Deliverable revision history (v1–v3)', 'Streaming AI copilot responses', 'Project health insights and executive reports'],
    architecture: [{ label: 'Experience', detail: 'React + TypeScript dashboard' }, { label: 'Application', detail: 'FastAPI REST endpoints + SSE' }, { label: 'Intelligence', detail: 'Gemini AI copilot' }, { label: 'Persistence', detail: 'SQLite / workspace records' }],
    outcome: 'A connected project-management experience with live AI assistance and structured client delivery.',
  },
  {
    slug: 'ai-cyber-forensics', index: '02', title: 'AI-Cyber-Forensics', overline: 'EVIDENCE INTELLIGENCE', category: 'AI / ML',
    summary: 'Digital evidence organization with OCR, cryptographic integrity checks, investigator workflows and contextual AI assistance.',
    elevator: 'Turning scattered digital evidence into traceable investigation context.',
    tags: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'FAISS', 'RAG', 'OCR', 'SHA-256'], year: '2026', status: 'Public repository',
    repo: 'https://github.com/Yadhaesh27/AI-Cyber-Forensics', verifiedRepo: true, featured: true, motif: 'shield', theme: 'cyan',
    problem: 'Investigators have to preserve evidence integrity while searching across mixed files and keeping an auditable trail of what happened and when.',
    approach: 'Created an investigation workspace combining evidence ingestion, hashing, OCR and contextual search. The public repository documents configurable local/cloud LLM connectors and a lightweight NumPy vector store; the resume additionally describes a PostgreSQL/FAISS architecture.',
    features: ['Secure case and evidence organization', 'SHA-256 hash verification', 'OCR and metadata extraction', 'Chain-of-custody event ledger', 'Contextual retrieval and AI assistant'],
    architecture: [{ label: 'Experience', detail: 'React investigation dashboard' }, { label: 'API', detail: 'Python + FastAPI' }, { label: 'Evidence', detail: 'OCR, hashes and audit records' }, { label: 'Retrieval', detail: 'Vector search + configurable LLM' }],
    outcome: 'An investigation-focused platform that emphasizes traceability, evidence search, and human-in-the-loop AI support.',
    note: 'Stack details differ between the uploaded resume and current public README. This case study uses the verified public implementation where applicable.',
  },
  {
    slug: 'justra', index: '03', title: 'JUSTRA AI', overline: 'MOBILE LEGAL INTELLIGENCE', category: 'AI / ML',
    playStore: 'https://play.google.com/store/apps/details?id=com.justra.app',
    summary: 'A privacy-centric mobile legal guidance app launched on Google Play, with actionable dispute-resolution workflows, English/Tamil voice interaction and secure document storage.',
    elevator: 'Making complex legal information easier to navigate, while protecting personal documents.',
    tags: ['Mobile Application', 'NLP', 'Biometrics', 'AES-256'], year: '2026', status: 'Launched on Google Play', featured: true, motif: 'scales', theme: 'cyan',
    problem: 'Complex legal terminology and digital fraud make it difficult for people to navigate disputes and protect sensitive documents.',
    approach: 'Developed a mobile legal guidance app with actionable dispute-resolution workflows, bilingual voice interaction, heuristic scam detection and a local encrypted biometric document vault.',
    features: ['Actionable dispute-resolution workflows', 'English and Tamil voice interaction', 'Heuristic phishing and scam detection', 'Biometric document vault', 'Local AES-256 encryption'],
    architecture: [{ label: 'Interaction', detail: 'Mobile app + bilingual voice' }, { label: 'Guidance', detail: 'NLP + dispute-resolution workflows' }, { label: 'Protection', detail: 'Heuristic phishing / scam detection' }, { label: 'Vault', detail: 'Biometrics + local AES-256 encryption' }],
    outcome: 'A completed mobile legal intelligence application launched on Google Play, designed to make legal guidance more accessible.',
    note: 'Google Play launch reported by the developer. Not a substitute for professional legal advice.',
  },
  {
    slug: 'smart-drainage-monitoring', index: '04', title: 'AI-Based Smart Drainage Monitoring', overline: 'INTELLIGENT INFRASTRUCTURE', category: 'Systems',
    summary: 'Computer vision and IoT monitoring for infrastructure anomalies, real-time telemetry and early incident alerts.',
    elevator: 'From reactive maintenance to earlier, data-led intervention.',
    tags: ['Python', 'Computer Vision', 'IoT', 'React', 'Telemetry'], year: '2026', status: 'Resume project', featured: true, motif: 'waves', theme: 'teal',
    problem: 'Infrastructure incidents are hard to respond to when anomalies are identified late or monitoring data is difficult to interpret.',
    approach: 'Designed a web-facing monitoring workflow in which telemetry and visual signals feed a Python-based anomaly assessment pipeline, with alert states presented in a responsive dashboard.',
    features: ['Real-time IoT sensor streams', 'ML and computer-vision anomaly detection', 'Real-time telemetry dashboard', 'Anomaly alerts and automated incident dispatch'],
    architecture: [{ label: 'Signals', detail: 'IoT sensors + visual input' }, { label: 'Detection', detail: 'Python + computer vision' }, { label: 'Display', detail: 'React monitoring dashboard' }, { label: 'Action', detail: 'Anomaly alerts / dispatch workflow' }],
    outcome: 'A monitoring system focused on making potential drainage problems visible sooner.',
    note: 'Featured in the uploaded resume. No matching public repository was verified.',
  },
  {
    slug: 'apex-ai', index: '05', title: 'APEX AI', overline: 'DEVOPS INCIDENT RESPONSE AGENT', category: 'AI / ML',
    summary: 'An in-progress AI agent for application and server monitoring, incident triage and evidence-based root-cause investigation.',
    elevator: 'Helping engineers investigate operational incidents and recommend safer recovery actions.',
    tags: ['AI Agents', 'Python', 'LLMs', 'DevOps', 'Monitoring'], year: '2026', status: 'In Progress', featured: true, motif: 'pulse', theme: 'violet',
    problem: 'Incident responders often switch between logs, metrics, alerts and runbooks before reaching a reliable diagnosis.',
    approach: 'Developing an agent for monitoring, incident triage and evidence-based root-cause investigation. Log and metric analysis, remediation recommendations and approval-gated recovery are planned capabilities.',
    features: ['Application and server monitoring (in development)', 'Incident triage (in development)', 'Evidence-based root-cause investigation (in development)', 'Log and metric analysis (planned)', 'Remediation recommendations (planned)', 'Approval-gated recovery actions (planned)'],
    architecture: [{ label: 'Input', detail: 'Application and server monitoring' }, { label: 'Reasoning', detail: 'LLM-assisted incident investigation' }, { label: 'Analysis', detail: 'Logs and metrics (planned)' }, { label: 'Safety', detail: 'Approval-gated recovery (planned)' }],
    outcome: 'An ongoing engineering project; finished implementation and production results are not yet claimed.',
  },
  {
    slug: 'aegis-ai', index: '06', title: 'AEGIS AI', overline: 'EMERGENCY MOBILITY', category: 'Systems',
    summary: 'Traffic command center concept for emergency-vehicle priority, road routing and real-time map-driven coordination.',
    elevator: 'Exploring smarter routes when every second matters.',
    tags: ['React', 'FastAPI', 'NetworkX', 'SQLite', 'SSE'], year: '2026', status: 'Additional work', motif: 'map', theme: 'violet',
    problem: 'Emergency mobility depends on rapidly interpreting traffic states, route alternatives and coordination across intersections.',
    approach: 'Developed a prototype architecture with a React command center, FastAPI services, a graph-based road network, geospatial calculations and streamed simulation updates.',
    features: ['Map-based operator command center', 'NetworkX road graph and routing', 'Simulated GPS and priority signals', 'Persistent event data', 'Real-time updates'],
    architecture: [{ label: 'UI', detail: 'React command center' }, { label: 'Routing', detail: 'NetworkX + geospatial logic' }, { label: 'Services', detail: 'FastAPI + SSE' }, { label: 'Storage', detail: 'SQLite simulation records' }],
    outcome: 'A technical exploration of route prioritization and situational awareness for emergency response.',
    note: 'Additional project shared in prior discussions; no public repository linked.',
  },
];

export const publicRepos = [
  { name: 'ClientFlow-AI', description: 'Enterprise client collaboration and AI workspace', url: 'https://github.com/Yadhaesh27/ClientFlow-AI', language: 'TypeScript' },
  { name: 'AI-Cyber-Forensics', description: 'Agentic digital evidence and investigation platform', url: 'https://github.com/Yadhaesh27/AI-Cyber-Forensics', language: 'Python' },
  { name: 'Data-Structures', description: 'Shortest path between two users', url: 'https://github.com/Yadhaesh27/Data-Structures', language: 'Repository' },
  { name: 'Python-Programming', description: 'Hospital management system', url: 'https://github.com/Yadhaesh27/Python-Programming', language: 'Repository' },
];

export const skillGroups = [
  { id: '01', label: 'PROGRAMMING', items: ['Java', 'Python', 'C', 'JavaScript (ES6+)', 'SQL'] },
  { id: '02', label: 'CS FUNDAMENTALS', items: ['Data Structures', 'Object-Oriented Programming', 'Software Engineering'] },
  { id: '03', label: 'AI / ML', items: ['Machine Learning', 'NLP', 'Computer Vision', 'RAG', 'LLM Integration', 'OCR', 'FAISS'] },
  { id: '04', label: 'SOFTWARE & DATABASES', items: ['React.js', 'FastAPI', 'REST APIs', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'PostgreSQL', 'SQLite'] },
  { id: '05', label: 'CLOUD, SECURITY & TOOLS', items: ['Cloud Fundamentals', 'Azure Basics', 'Docker', 'SSE', 'Git', 'GitHub', 'Postman', 'VS Code', 'Digital Forensics', 'Threat Analysis', 'Vulnerability Assessment'] },
];

export const certifications = ['Wipro · .NET Certification', 'Microsoft Azure · Simplilearn', 'Cybersecurity · Simplilearn', 'Japanese Language Certificate · N5.1', 'AWS Cloud Practitioner Essentials · AWS Skill Builder (In Progress)', 'Building Generative AI Applications · AWS Skill Builder (In Progress)'];
export const highlights = [
  { value: '01', label: 'HACKATHON WIN', detail: 'Syntax2Code · 1st place' },
  { value: '2027', label: 'GRADUATION', detail: 'B.E. Computer Science' },
  { value: '15+', label: 'REACT COMPONENTS', detail: 'Built during internship*' },
];
