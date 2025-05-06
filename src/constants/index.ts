import { NavLink, Project, TimelineItem, Skill, SocialLink } from '../types';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Code,
  CircleUser,
  HomeIcon,
  FolderKanban,
  GanttChartSquare,
  Send
} from 'lucide-react';

export const navLinks: NavLink[] = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Experience",
    url: "#experience",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const navIcons = {
  Home: HomeIcon,
  About: CircleUser,
  Experience: Briefcase,
  Projects: FolderKanban,
  Skills: GanttChartSquare,
  Contact: Send
};

export const timelineExperience: TimelineItem[] = [
  {
    id: 3,
    title: "Junior Developer",
    location: "Zidio Development, Remote",
    description:
      "Contributed to front-end development using React and integrated RESTful APIs.",
    date: "May,2023 - Aug,2023",
    icon: "Code",
  },
  {
    id: 4,
    title: "Computer Science & Information Technology Degree",
    location: "KIET Group of Institutions",
    description:
      "Bachelor's degree in Computer Science with focus on software engineering and web technologies.",
    date: "2021 - 2025",
    icon: "GraduationCap",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Krowdfund – Donation Platform for NGOs",
    description: "A full-stack web platform facilitating donations to NGOs with secure payment processing and real-time tracking.",
    details: [
      "Orchestrated the design and development of a full-stack web platform aimed at facilitating donations to NGOs.",
      "Engineered backend microservices and RESTful APIs with Node.js for scalable data handling.",
      "Constructed frontend interfaces using HTML5, CSS, and JavaScript for optimal user interaction.",
      "Participated in regular team standups to ensure timely delivery and project coherence.",
      "Integrated MongoDB for NoSQL data storage and scalability, addressing large user volumes and concurrent access."
    ],
    tags: ["JavaScript", "Node.js", "React.js", "MongoDB", "HTML5", "CSS", "REST API", "Full Stack Development"],
    image: "https://images.pexels.com/photos/7620629/pexels-photo-7620629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 2,
    title: "NewsNY – News Aggregation Platform",
    description: "A real-time news portal integrating NYTimes API to deliver timely information to users with a responsive design.",
    details: [
      "Developed a real-time news portal integrating NYTimes API to deliver timely information to users.",
      "Built a responsive UI using Bootstrap and modern JavaScript frameworks to enhance readability.",
      "Designed scalable infrastructure using Express.js and MongoDB to manage traffic and performance.",
      "Troubleshot integration issues and deployed backend logic to ensure seamless API interactions."
    ],
    tags: ["Node.js", "Express.js", "JavaScript", "REST API", "MongoDB", "Bootstrap", "API Integration", "Frontend Development"],
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    tags: ["React", "Redux", "Express", "MongoDB"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A weather application showing current conditions and 5-day forecasts using geolocation and weather APIs.",
    tags: ["React", "OpenWeather API", "Geolocation"],
    image: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Redux", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git", level: 85 },
  { name: "AWS", level: 65 },
  { name: "Docker", level: 60 },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/RishabhLawaniya",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rishabh-lawaniya/",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/Rishu_lawaniya",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:rishabhlawaniya24@gmail.com",
    icon: "Mail",
  },
];

export const aboutMe = {
  name: "Rishabh Lawaniya",
  title: "Software Engineer & UX Enthusiast",
  description: "I'm a passionate software engineer with experience building modern web applications. Specializing in React.js and Node.js, I create scalable solutions with clean, maintainable code. My approach combines technical excellence with user-centered design principles to deliver exceptional digital experiences.",
  location: "New Delhi, India",
  email: "rishabhlawaniya24@gmail.com",
  availability: "Available for In-office work",
};