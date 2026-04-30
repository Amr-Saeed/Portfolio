import { useEffect, useState } from "react";

import {
  faCode,
  faCodeBranch,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 1,
    title: "Welady",
    description: "Developed a Full Web & mobile App. for Students management.",
    technologies: [
      "React.JS",
      "React Native",
      "Tailwind CSS",
      "Supabase",
      "Recharts",
    ],
    status: "Completed",
    year: "2026",
    company: "NTI",
    features: [
      "Built a multi-tenant B2C SaaS education platform connecting parents and teachers through role-based workflows, unifying scheduling, attendance, homework, and payments into a single scalable product experience.",
      "Engineered a group-based data architecture where private lessons are modeled as single-student groups, enabling consistent UI/UX patterns and simplifying frontend state management across modules.",
      "Designed a hybrid event-driven notification system (client-side + local persistence) supporting real-time updates for attendance, homework, and payments, improving user engagement and reducing missed actions by 40%.",
      ],
    images: [],
    githubUrl: "https://github.com/Amr-Saeed/welady",
    liveUrl: null,
    isPrivate: true,
  },
  {
    id: 1,
    title: "MAIO - Medical All In One",
    description: "Developed a Full Web Application for Medical Management. ",
    technologies: [
      "React.JS",
      "Next.JS",
      "Tailwind CSS",
      "Express",
      "Node.JS",
      "MongoDB",
      "React Query",
      "React Hook Form",
      "React Dropzone",
      "Socket.IO",
      "REST API",
    ],
    status: "Completed",
    year: "2025",
    company: "NTI",
    features: [
      "Built a full-stack B2B SaaS healthcare platform enabling appointment booking, shared medical records, and prescriptions for multiple doctors per patient, reducing fragmented care by 45%.",
      "Enabled real-time doctor-to-doctor communication and patient updates using Socket.IO, cutting inter-physician response time by 35%.",
      "Optimized data fetching and form handling with React Query and React Hook Form, improving page performance and submission reliability by 30%",
      ],
    images: [],
    githubUrl: "https://github.com/Amr-Saeed/MAIO",
    liveUrl: null,
    isPrivate: true,
  },
  {
    id: 1,
    title: "Smart-Cart",
    description: "Developed a Full Web & Mobile App. ",
    technologies: [
      "React.JS",
      "Tailwind CSS",
      "PWA",
      "BLE",
      "Axios",
      "Framer Motion",
      "ShadCN",
      "DaisyUI",
      "HeadlessUI",
      "Swiper",
      "REST API",
    ],
    status: "Completed",
    year: "2024",
    company: "Mak Design Private Limited",
    features: [
      "Built an 8-page responsive web application with dynamic admin dashboard, authentication (email/password + Google OAuth), and real-time monitoring features, ensuring 100% cross-device responsiveness.",
      "Developed a mobile Progressive Web App (PWA) with Bluetooth Low Energy (BLE) integration for cart pairing, movement control, and real-time cart status updates, reducing manual checkout time by 40%",
      "Implemented REST API and WebSocket communication to synchronize user data, cart activity, and live product recommendations, handling real-time events for multiple users simultaneously",
      "Optimized UX with offline/online local storage synchronization, smooth animations (Framer Motion), and a clean component library (ShadCN, DaisyUI), which improved user task completion rate by 30%.",
      "Collaborated with backend and hardware teams to integrate cart hardware with the web and mobile apps, ensuring seamless cross-platform operation in a production-like environment.",
    ],
    images: [],
    githubUrl: "https://github.com/Amr-Saeed/Smart-Cart",
    liveUrl: null,
    isPrivate: true,
  },
  {
    id: 2,
    title: "WorldWise App",
    description:
      "Developed a travel tracking web application with interactive maps, fake REST API integration, and global state management, enabling users to log, edit, and visualize visited cities with seamless navigation and responsive UI.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Leaflet.js",
      "Context API",
      "Mock REST API",
      "Css Modules",
    ],
    category: "Frontend Development",
    status: "Completed",
    year: "2024",
    features: [
      "Built a travel tracking application that allows users to log, edit, and delete visited cities with geolocation support.",
      "Integrated with a mock REST API to fetch and persist city data, simulating real backend communication.",
      "Implemented an interactive world map using Leaflet for visualizing trips and city markers.",
      "Developed state management with Context API for handling city data and user interactions globally.",
      "Designed a responsive and user-friendly interface with animations and clean UI components, ensuring cross-device compatibility.",
    ],
    images: [],
    githubUrl: "https://github.com/Amr-Saeed/WorldWise/tree/main",
    liveUrl: null,
    isPrivate: true,
  },
  {
    id: 3,
    title: "React Quiz App",
    description:
      "Developed an interactive React Quiz App with real-time scoring, progress tracking, and dynamic feedback to enhance learning engagement.",
    technologies: [
      "React",
      "CSS Modules",
      "REST API",
      "State Management",
      "Context API",
      "Reducers",
    ],
    category: "Scientific Computing",
    status: "Completed",
    year: "2023",
    company: "DRDO",
    features: [
      "Implemented timed quizzes with dynamic scoring and instant feedback.",
      "Managed global state using Context API and useReducer for scalability.",
      "Displayed progress indicators, final score summary, and restart option.",
      "Designed a responsive UI with smooth animations for better user experience.",
    ],
    images: [],
    githubUrl: "https://github.com/Amr-Saeed/React-Quiz/tree/main",
    liveUrl: null,
    isPrivate: true,
  },
  {
    id: 4,
    title: "E-commerce",
    description:
      "Built a fully functional e-commerce web app with product browsing, shopping cart management, and checkout flow using vanilla JavaScript.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration",
      "Local Storage",
    ],
    category: "Desktop Application",
    status: "Completed",
    year: "2023",
    company: "DRDO",
    features: [
      "Developed a responsive e-commerce platform with mobile-first layouts, animations, and optimized design, resulting in 20% faster load times across devices",
      "Implemented key features such as wishlist, cart, product filtering, and a trending section, enhancing customer navigation and driving usability.",
      "Improved user engagement by adding interactive UI elements (toggles, loading screens), reducing bounce rate during internship demo testing.",
      "Integrated Local Storage to persist cart items across sessions.",
    ],
    images: [],
    githubUrl: "https://github.com/Amr-Saeed/E-Commerce-Web-",
    liveUrl: null,
    isPrivate: true,
  },
  // {
  //   id: 5,
  //   title: "2D Data Visualization Tool",
  //   description:
  //     "Developed a Python-based 2D plotting tool backed by Flask API for enhanced data visualization and improved decision-making clarity.",
  //   technologies: [
  //     "Python",
  //     "Flask",
  //     "Data Visualization",
  //     "API Development",
  //     "Charts",
  //   ],
  //   category: "Data Visualization",
  //   status: "Completed",
  //   year: "2023",
  //   company: "DRDO",
  //   features: [
  //     "Interactive 2D plotting",
  //     "Flask API backend",
  //     "Real-time data processing",
  //     "Decision-making insights",
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true,
  // },
  // {
  //   id: 6,
  //   title: "IPFS Trading Platform Engine",
  //   description:
  //     "Redesigned trading platform core engine with IPFS Merkle DAG and pub-sub system, reducing transaction times by 70%.",
  //   technologies: [
  //     "Node.js",
  //     "Express.js",
  //     "IPFS",
  //     "Merkle DAG",
  //     "Blockchain",
  //     "Pub-Sub",
  //   ],
  //   category: "Blockchain Development",
  //   status: "Completed",
  //   year: "2023",
  //   company: "Verified Network",
  //   features: [
  //     "70% reduction in transaction times",
  //     "IPFS Merkle DAG implementation",
  //     "Pub-sub messaging system",
  //     "Enhanced marketplace efficiency",
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true,
  // },
  // {
  //   id: 7,
  //   title: "Automated CI/CD Pipeline",
  //   description:
  //     "Engineered comprehensive CI/CD pipeline using GitHub Actions and AWS CodeDeploy for fully automated deployments.",
  //   technologies: [
  //     "GitHub Actions",
  //     "AWS CodeDeploy",
  //     "DevOps",
  //     "Automation",
  //     "Cloud",
  //   ],
  //   category: "DevOps",
  //   status: "Completed",
  //   year: "2023",
  //   company: "Verified Network",
  //   features: [
  //     "Fully automated deployments",
  //     "GitHub Actions integration",
  //     "AWS CodeDeploy implementation",
  //     "Accelerated release cycles",
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true,
  // },
  // {
  //   id: 8,
  //   title: "Social Media Platform",
  //   description:
  //     "Developed a scalable social media platform with WebSocket-based voice/video calling, serving 10,000+ active users.",
  //   technologies: [
  //     "Node.js",
  //     "Express.js",
  //     "Next.js",
  //     "MongoDB",
  //     "WebSocket",
  //     "WebRTC",
  //   ],
  //   category: "Full Stack Development",
  //   status: "Completed",
  //   year: "2022",
  //   company: "Metarootz",
  //   features: [
  //     "10,000+ active users",
  //     "WebSocket voice/video calling",
  //     "Scalable architecture",
  //     "Real-time communication",
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true,
  // },
];

const Projects = () => {
  const projectsArray = "Projects".split("");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>A showcase of my technical projects In Front-End Development</p>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Images Section */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`${project.title} ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta"></div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
