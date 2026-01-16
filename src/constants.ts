import type Project from "./types/project";

export const ABOUT_SECTIONS = [
  {
    id: 0,
    imgSrc: "about.svg",
    text: "Who am I? I'm a self-taught front-end developer who enjoys creating web applications.",
  },
  {
    id: 1,
    imgSrc: "location.svg",
    text: "I am currently located in Poland, a country known for its rich history, vibrant culture, and beautiful landscapes.",
  },
  {
    id: 2,
    imgSrc: "interests.svg",
    text: "My interests include programming, creating digital solutions, cybersecurity, personal development, and automotive.",
  },
  {
    id: 3,
    imgSrc: "goal.svg",
    text: "Current goal: Develop my character and knowledge by taking on challenges and learning from new experiences and failures.",
  },
];

export const SOCIAL_LINKS = [
  {
    id: 0,
    href: "https://github.com/SyntaxBreaker",
    imgSrc: "../github.svg",
    label: "Github",
  },
  {
    id: 1,
    href: "https://codepen.io/SyntaxBreaker",
    imgSrc: "../codepen.svg",
    label: "Codepen",
  },
  {
    id: 2,
    href: "https://dev.to/SyntaxBreaker",
    imgSrc: "../dev.svg",
    label: "Dev.to",
  },
];

export const TECH_STACK = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Git",
  "Tailwind CSS",
];

export const MECHANIC_PLUS_PROJECT: Project = {
  id: 0,
  html_url: "",
  homepage: "https://mechanicplus.netlify.app",
  name: "MechanicPlus",
  description:
    "MechanicPlus is an innovative tool that converts ways of managing your garage. This application offers various functions that help mechanics and customers maintain clarity and optimization of service processes.",
  topics: ["nextjs", "react", "supabase", "tailwindcss", "typescript"],
  fork: false,
};
