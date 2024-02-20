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
      title: "Mid-Level Software Engineer",
      start: "Feb 2023",
      end: "Present",
      description: [
        "Developed ERP system development with React and TypeScript, streamlining user, content, and product management, and automated backend processes for efficient VPS deployment.",
        "Crafted visually appealing, adaptable interfaces across devices, enhancing user experience and establishing a UI component system documented in Storybook for design consistency.",
        "Leveraged Next.js alongside React and TypeScript to develop fast, scalable, SEO-friendly web applications, significantly boosting web performance and visibility.",
        "Combined strategic development practices with comprehensive documentation and agile methodologies to deliver high-quality, user-centric software solutions.",
      ],
    },
    {
      company: "Dr. Pal",
      link: "https://www.linkedin.com/company/dr-pal/",
      badges: ["Remote", "Part Time"],
      title: "Frontend Engineer",
      start: "Oct 2023",
      end: "Present",
      description: [
        "Collaborated closely with the CTO and Co-Founder of Dr. Pal to develop and enhance new features for the company's web page builder.",
        "Played a key role in aligning the development process with evolving business and user requirements through direct communication and coordination.",
        "Contributed to the continuous improvement of the web page builder tool, ensuring it met strategic objectives and user satisfaction.",
      ],
    },
    {
      company: "Orange Digital Center Egypt",
      link: "https://www.orangedigitalcenters.com/country/EG/home",
      badges: ["Onsite", "internship"],
      title: "Frontend Developer",
      start: "Sep 2022",
      end: "Feb 2023",
      description: [
        "Implemented Redux Toolkit for state management and integrated RTK Query for API consumption in a React/TypeScript-based LMS project.",
        "Designed responsive interfaces using TailwindCSS and Material UI, while following Agile methodologies with Jira for project management.",
      ],
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
    "NeonDB",
    "PlanetScale",
    "Supabase",
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
      title: "Thomas IQ",
      techStack: ["Open Source", "Next.js", "Tailwind CSS"],
      description:
        "Open source project to increase your chances to pass Thomas International IQ test",
      link: {
        label: "thomas-iq-test-prep.vercel.app",
        href: "https://thomas-iq-test-prep.vercel.app/",
      },
    },
  ],
} as const;
