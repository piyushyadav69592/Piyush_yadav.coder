import { FaLightbulb,FaPalette ,FaMicrosoft,FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, } from 'react-icons/fa';
import { GiBookshelf } from "react-icons/gi";

import profileImg from '../assets/profile.JPG';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
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
    // color: 'text-teal-500'
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
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
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
