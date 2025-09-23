/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import {
  faAws,
  faCss,
  faDocker,
  faGitAlt,
  faGolang,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <h2>
            💻 Computer Engineer | Front-End Developer | Software Enthusiast
          </h2>
          <p>
            I'm a recent graduate in Computer Engineering with a solid
            foundation in both hardware and software. Throughout my studies and
            personal projects, I developed a strong passion for software
            development and decided to focus my career on it. I have hands-on
            experience with programming languages like C++ and Python, and I’ve
            built a wide range of projects that have sharpened my
            problem-solving skills and deepened my understanding of software
            systems.
          </p>
          <p>
            My main area of interest is Front-End development, and I specialize
            in React.js, creating responsive, clean, and user-friendly web
            interfaces. I enjoy turning ideas into real, interactive web
            applications and continuously work on improving the performance and
            accessibility of my code. I'm currently expanding my knowledge in
            TypeScript, Next.JS and modern web technologies, and I'm open to new
            opportunities where I can grow, contribute, and collaborate with
            others on impactful projects.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#4B8BBE" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
