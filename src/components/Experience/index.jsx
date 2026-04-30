import { useEffect, useState } from "react";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const workExperience = [
  {
    id: 1,
    company: "BITES",
    position: "Associate Frontend Developer",   
    duration: "Apr. 2025 - Present",
    location: "Remote",
    achievements: [
      "Working on enterprise-scale React.js and Next.js SaaS platforms, contributing to modular architecture and building reusable frontend components across multiple production systems.",
      "Taking ownership of complete feature modules, translating Figma designs into production-grade interfaces while implementing API integration, state handling, and client-side business logic.",
      "Participating in cross-functional Agile development cycles with designers and backend teams, ensuring consistent UX delivery and improving feature delivery efficiency across sprint cycles.",
    ],
  },
  {
    id: 2,
    company: "National Telecommunication Institute (NTI)",
    companyUrl: "http://nti.sci.eg/",
    position: "Open-Source Applications Developer Tracke",   
    duration: "Oct. 2025 - Jan. 2026",
    location: "Smart Village, Egypt (Onsite)",
    achievements: [
      "Completed a 420-hour full-stack program covering React, Next.js, Node.js, SQL/NoSQL databases, Docker, CI/CD, cloud deployment, authentication, API security, and real-time systems.",
      "Built and deployed production-ready applications and completed 132 hours of career development in communication, leadership, and project management",
    ],
  },
  {
    id: 3,
    company: "NTI",
    companyUrl: "http://nti.sci.eg/",
    position: "Frontend Developer Intern",
    duration: "Sep. 2024 - Oct. 2024",
    location: "Creative - Benha, Egypt (Onsite)",
    achievements: [
      "Participated in an on-site training program focused on core front-end technologies",
      "Built practical projects and practiced responsive design using HTML, CSS, JavaScript",
      "Completed a 30-hour freelance project by developing a small dashboard for a client, earning money for the deliverable",
      "Achieved a score of 98% in the training program, ranking in the top 5% of participants",
    ],
  },
  {
    id: 4,
    company: "Neorunetix",
    companyUrl: "",
    position: "Web Developer Intern",
    duration: "Aug. 2024 – Sep. 2024",
    location: "Gwalior, Madhya Pradesh (Hybrid)",
    achievements: [
      "Completed a 12-hour internship program focused on real-world web development tasks",
      "Gained hands-on experience with HTML, CSS, JavaScript, ReactJS, NodeJS and supabase in practical applications",
    ],
  },
];

const Experience = () => {
  const experienceArray = "Experience".split("");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p style={{ width: "75%" }}>
            As a recent graduate, I’ve had the opportunity to complete two
            internships where I worked on real-world software projects,
            strengthening my skills in frontend development and modern
            frameworks. These experiences gave me practical insight into team
            collaboration and building scalable applications. I’m passionate
            about applying my knowledge, learning quickly, and evolving into a
            versatile software engineer.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
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

export default Experience;
