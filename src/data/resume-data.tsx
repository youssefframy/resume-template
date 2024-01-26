import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { BlogIcon } from "@/components/icons/BlogIcon";

export const RESUME_DATA = {
  name: "Youssef Ramy",
  initials: "YR",
  location: "Cairo, Egypt",
  locationLink: "",
  avatarUrl: "",
  about:
    "Software Engineer focused on building high scalable and fast application with extra attention to details.",
  summary:
    "As a Software Engineer specializing in frontend development, I'm always eager to tackle new projects and enhance my skills. My interest in the broader aspects of software engineering, like DevOps and cloud computing where I pursued certifications from AWS and Google Cloud underline my commitment to staying at the forefront of technology.",
  personalWebsiteUrl: "https://thedev-blog.vercel.app",
  contact: {
    email: "youssefframy0@gmail.com",
    tel: "+201203395100",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/youssefframy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/youssefframy/",
        icon: LinkedInIcon,
      },
      {
        name: "Blog",
        url: "https://thedev-blog.vercel.app",
        icon: BlogIcon,
      },
    ],
  },
  education: [
    {
      school: "Helwan University",
      degree: "Bachelor's Degree in Computer Science and Information Systems",
      start: "2020",
      end: "2024",
    },
    {
      school: "Collège De La Salle",
      degree: "High School Diploma, French Studies - DELF B2",
      start: "2006",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Bronto24",
      link: "https://bronto24.com.com",
      badges: ["Hybrid", "Full Time"],
      title: "Mid Level Software Engineer",
      start: "Feb 2023",
      end: "Present",
      description:
        "I played a key role in developing an ERP system with React and TypeScript, streamlining user, content, and product management, and also established a full backend automation process for efficient code deployment on a private VPS. My work involved designing visually appealing, ensuring adaptability on various devices, and crafting a comprehensive UI component system documented in Storybook. Additionally, I leveraged Next.js, React and typescript to build fast, high-performing, scalable and SEO-friendly web applications.",
    },
    {
      company: "Dr. Pal",
      link: "https://www.linkedin.com/company/dr-pal/",
      badges: ["Remote", "Part Time"],
      title: "Frontend Engineer",
      start: "Oct 2023",
      end: "Present",
      description:
        "Collaborating closely with the CTO and Co-Founder of Dr. Pal, I was instrumental in developing and enhancing new features for the company's web page builder. My role involved direct communication and coordination to ensure the tool met evolving business and user requirements.",
    },
    {
      company: "Orange Digital Center Egypt",
      link: "https://www.orangedigitalcenters.com/country/EG/home",
      badges: ["Onsite", "internship"],
      title: "Frontend Developer",
      start: "Sep 2022",
      end: "Feb 2023",
      description:
        "I contributed to developing a large-scale Learning Management System using React and TypeScript, blending efficient backend integration with visually appealing, responsive design using TailwindCSS and Material UI.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Storybook",
    "Node.js",
    "PostgresSQL",
    "Devops",
    "AWS Certified Cloud Practitioner",
    "Google Associate Cloud Developer",
    "Github Actions",
    "Docker",
  ],
  projects: [
    {
      title: "ERP System",
      techStack: ["React", "Redux", "TailwindCSS", "Storybook", "ShadCN UI"],
      description:
        "Integrating CMS, CRM, and E-commerce for streamlined business operations.",
    },
    {
      title: "B2YOU",
      techStack: ["React", "Typescript", "React Three Fiber", "react-helmet"],
      description:
        "Revolutionized b2you with a high-ranking, dynamic, and user-engaging web presence.",
      link: {
        label: "b2you-global.com",
        href: "https://www.b2you-global.com/",
      },
    },
    {
      title: "Jord Assistance",
      techStack: ["Next.js", "Tailwind CSS", "Resend", "React Emails"],
      description:
        "Uniting Jordanian hospitality with premier service for regional guests.",
      link: {
        label: "jordassistance.com",
        href: "https://www.jordassistance.com/",
      },
    },
    {
      title: "ATA",
      techStack: ["Next.js", "i18n", "Tailwind CSS", "Resend", "React Emails"],
      description:
        "Enhanced multilingual, accessible, high-SEO, animated website.",
      link: {
        label: "anatoliatravelassistance.com",
        href: "https://www.anatoliatravelassistance.com/",
      },
    },
    {
      title: "Titex Egy",
      techStack: [
        "Freelance",
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Supabase",
      ],
      description:
        "Boosted sales with a sleek, responsive e-commerce site for social media presence.",
    },
  ],
} as const;
