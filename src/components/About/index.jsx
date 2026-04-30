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
          I'm a Computer Engineering graduate focused on software development, with a strong interest in Front-End technologies. I specialize in React.js and enjoy building clean, responsive, and user-friendly interfaces.

          </p>
          <p>
          Currently, I'm working on real-world projects at Bites, where I apply my skills to develop scalable web applications. I'm also expanding my knowledge in TypeScript, Next.js, and modern web practices while continuously improving performance and user experience.

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
