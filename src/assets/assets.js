import { FaLightbulb, FaPalette, FaMicrosoft, FaPaintBrush, FaCode, FaReact, FaServer, FaHtml5, FaTools, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';
import { GiBookshelf } from "react-icons/gi";

import profileImg from '../assets/profile.JPG';
import projectImg1 from '../assets/project1.jpg';
import projectImg2 from '../assets/project2.jpg';
import projectImg3 from '../assets/project3.jpg';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.jpg';
import projectImg6 from '../assets/project6.jpg';
import projectImg7 from '../assets/project7.jpg';
import projectImg8 from '../assets/project8.webp';
import projectImg9 from '../assets/project9.jpg';
import projectImg10 from '../assets/project10.jpeg';


export const assets = {
  profileImg,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
  projectImg7,
  projectImg8,
  projectImg9,
  projectImg10
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-yellow'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  },
  {
    icon:GiBookshelf,
    title: 'UI/UX with Figma',
    description: 'I design modern, user-friendly interfaces in Figma, focusing on clean layouts and smooth user experiences.',
    color: 'text-green-500'
  }
  ,
];



 export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Bootstrap', 'Framer Motion', 'JavaScript', 'CSS', 'HTML']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing complete MERN applications with server-side logic and APIs.',
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and managing scalable databases for modern applications.',
    tags: ['MongoDB', 'Firebase']
  },
  {
    title: 'UI/UX & Design',
    icon: FaPalette,
    description: 'Crafting user-friendly designs and creative visuals.',
    tags: ['Figma', 'Canva']
  },
  {
    title: 'Tools & Workflow',
    icon: FaTools,
    description: 'Using essential tools for version control, testing, and productivity.',
    tags: ['Git & GitHub', 'Postman', 'Jira']
  },
  {
    title: 'Microsoft Office',
    icon:  FaMicrosoft,
    description:  'Skilled in Word, Excel, and PowerPoint for productivity and documentation.',
    tags: ['MSworld', 'MSExcel', 'MsPowerpoint']
  },
 

];




export const projects = [
  {
    title: "Calculator",
    description: "A simple and intuitive calculator application built with React, allowing users to perform basic arithmetic operations.",
    image: projectImg1,
    tech: ["React", "Bootstrap", "CSS", "JavaScript"],
    icons: [FaReact, FaBootstrap, FaCss3Alt, FaJs],
    demo: "#",
    code: "#",
  },
  {
    title: "Rock-Paper-Scissors Game",
    description: "A fun and interactive game where players can challenge the computer in a classic rock-paper-scissors match.",
    image: projectImg2,
    tech: ["JavaScript", "CSS", "HTML"],
    icons: [FaJs, FaCss3Alt, FaHtml5],
    demo: "#",
    code: "#",
  },
  {
    title: "Pdf Merger",
    description: "A simple and intuitive PDF merger application built with React, allowing users to combine multiple PDF files into one.",
    image: projectImg3,
    tech: ["JavaScript", "CSS", "HTML", "Node.js", "Express.js"],
    icons: [FaJs, FaCss3Alt, FaHtml5, FaNodeJs],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Tailwind CSS", "Framer Motion", "React"],
    icons: [SiTailwindcss, SiFramer, FaReact],
    demo: "#",
    code: "#"
  },
  {
    title: "Amazon Clone",
    description: "A creative design e-commerce platform inspired by Amazon's design and functionality.",
    image: projectImg5,
    tech: ["JavaScript", "CSS", "HTML"],
    icons: [FaJs, FaCss3Alt, FaHtml5],
    demo: "#",
    code: "#",
  },
  {
    title: "Login Page",
    description:  " A responsive login page with form validation and user authentication features.",
    image: projectImg6,
    tech: ["JavaScript", "HTML", "CSS", "API", "Google Sheets"],
    icons: [FaJs, FaHtml5, FaCss3Alt],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
