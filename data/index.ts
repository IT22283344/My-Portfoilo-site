// ---------------------------------------------------------------------------
// Profile content. Everything here comes from the real CV.
//
// TODO(hirusha): two things still need a value from you —
//   1. LINKEDIN_URL below (the CV lists the name, not the URL).
//   2. `img` on each project, once you have real screenshots. Cards render a
//      typographic placeholder until then rather than a stock mockup.
// ---------------------------------------------------------------------------

export const profile = {
  fullName: "A.D. Hirusha Rashmika Sumanaweera",
  name: "Hirusha Rashmika",
  role: "Associate Software Engineer",
  company: "FAITE Private Limited",
  location: "Sri Lanka",
  email: "hirusharashmika69@gmail.com",
  summary:
    "Associate Software Engineer at FAITE and an IT undergraduate at SLIIT. I work across the stack with Next.js, NestJS and React Native, building REST APIs and database-driven systems.",
};

export const GITHUB_URL = "https://github.com/IT22283344";
export const LINKEDIN_URL = "";

export const navItem = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Stack", link: "#stack" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build full-stack web and mobile applications end to end",
    description: "What I do",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 top-0 md:w-72 w-60",
    titleClassName: "justify-end md:justify-end lg:justify-end",
    img: "/b1.svg",
    imgAlt: "",
    spareImg: "/grid.svg",
  },
  {
    id: 2,
    title: "Based in Sri Lanka",
    description: "Where I am",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    imgAlt: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "What I work with",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start md:justify-start lg:justify-start",
    img: "",
    imgAlt: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "BSc (Hons) in Information Technology at SLIIT",
    description: "Education",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    imgAlt: "",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently building Smart Fisher Lanka, an AI decision support system for Sri Lankan fishermen",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-72 w-60",
    titleClassName: "justify-start md:justify-start lg:justify-start",
    img: "/b5.svg",
    imgAlt: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-96 text-center",
    img: "",
    imgAlt: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Fisher Lanka",
    subtitle: "AI-based decision support system",
    context: "SLIIT · Final year research",
    des: "An AI-powered decision support system for Sri Lankan fishermen, providing intelligent recommendations and fish quality assessment. I contributed to the mobile application, the backend services and the AI model integration.",
    tags: ["Mobile app", "Backend services", "AI / ML"],
    img: "",
    link: "",
  },
  {
    id: 2,
    title: "AgriConnect",
    subtitle: "Farmer-to-consumer marketplace",
    context: "SLIIT · Year 3, Semester 2",
    des: "A full-stack MERN platform connecting farmers directly with consumers, with product listings, order management, AI-based crop and price recommendations, and location-based product filtering.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    img: "",
    link: "",
  },
  {
    id: 3,
    title: "HR Document Collection System",
    subtitle: "Secure document management",
    context: "NDB Securities",
    des: "Designed, developed and internally deployed a secure HR document management system with authentication and role-based workflows, covering employee profile management, document submission and approval processes to improve HR operations and data accuracy.",
    tags: ["Full-stack", "Authentication", "Role-based access"],
    img: "",
    link: "",
  },
  {
    id: 4,
    title: "Support Ticketing System",
    subtitle: "Internal issue tracking",
    context: "NDB Securities",
    des: "Developed and internally deployed a support ticketing platform with secure authentication and issue tracking, letting employees submit, monitor and manage technical support requests and improving internal support workflows.",
    tags: ["Full-stack", "Authentication", "Issue tracking"],
    img: "",
    link: "",
  },
  {
    id: 5,
    title: "Maternity Care",
    subtitle: "Cross-platform health app",
    context: "Personal project",
    des: "A mobile app supporting expectant mothers with health tracking, appointment scheduling and doctor communication. A Node.js backend with MongoDB handles secure data management, with React Native for a smooth cross-platform experience.",
    tags: ["React Native", "Node.js", "MongoDB"],
    img: "",
    link: "",
  },
];

/**
 * Earlier coursework kept out of the rendered grid because it has no write-up
 * yet. Move an entry into `projects` once it has a `des`.
 * `/sondurumal.png` is a real screenshot belonging to the first of these.
 */
export const archivedProjects = [
  {
    id: 101,
    title: "Floral and Event Management Application",
    des: "",
    img: "/sondurumal.png",
    link: "",
  },
  { id: 102, title: "Cleaning Service Web Application", des: "", img: "", link: "" },
  {
    id: 103,
    title: "Online Vehicle Spare Parts Management System",
    des: "",
    img: "",
    link: "",
  },
  { id: 104, title: "Real estate web application", des: "", img: "", link: "" },
];

/** Marquee of technologies. `img` is optional: text-only where no logo exists. */
export const techStack = [
  { name: "React", img: "/re.svg" },
  { name: "Next.js", img: "/next.svg" },
  { name: "NestJS", img: "" },
  { name: "Node.js", img: "" },
  { name: "React Native", img: "" },
  { name: "TypeScript", img: "/ts.svg" },
  { name: "JavaScript", img: "" },
  { name: "MongoDB", img: "" },
  { name: "REST APIs", img: "" },
  { name: "Docker", img: "/dock.svg" },
  { name: "Linux", img: "" },
  { name: "Python", img: "" },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "FAITE Private Limited",
    period: "Apr 2026 — Present",
    desc: "Promoted from Software Engineer Trainee after completing a six-month training period. Building full-stack web and mobile applications with Next.js, NestJS and React Native, including scalable REST APIs and database-driven systems, and contributing to application architecture, debugging, deployment and Linux environments in a collaborative agile team.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Trainee Software Engineer",
    company: "FAITE Private Limited",
    period: "Oct 2025 — Mar 2026",
    desc: "Hands-on full-stack web and mobile development with Next.js, NestJS and React Native. Shipped features on real projects, integrated APIs and worked with databases while building up deployment workflow and agile team practice.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "NDB Securities · NDB Capitals Group",
    period: "Jan 2025 — Jul 2025",
    desc: "Full-stack and Python application development on Linux systems, with hands-on exposure to application deployment. Contributed to an Inventory Management System, an HR Employee Data Collection System, a Support Ticketing System and a Python-based internal automation tool.",
    thumbnail: "/exp3.svg",
  },
];

export const education = [
  {
    id: 1,
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    qualification:
      "BSc (Hons) in Information Technology, specialised in Information Technology",
    period: "Oct 2022 — Present",
  },
  {
    id: 2,
    institution: "Ibbagamuwa Central College",
    qualification: "G.C.E. Advanced Level, Physical Science stream",
    period: "2021",
  },
];

export const socialMedia = [
  { id: 1, name: "GitHub", img: "/git.svg", link: GITHUB_URL },
  { id: 2, name: "LinkedIn", img: "/link.svg", link: LINKEDIN_URL },
];
