import { useEffect, useState } from "react";

import Loader from "react-loaders";

import WordCloud from "./wordcloud";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have a solid foundation in both hardware and software. Throughout
            my studies and personal projects, I developed a strong passion for
            software development and decided to focus my career on it. I have
            hands-on experience with programming languages like C++ and Python,
            and I’ve built a wide range of projects that have sharpened my
            problem-solving skills and deepened my understanding of software
            systems.
          </p>
          <p>
            My main area of interest is Front-End development, and I specialize
            in React.js and Next.js, creating responsive, clean, and user-friendly web
            interfaces. I enjoy turning ideas into real, interactive web
            applications and continuously work on improving the performance and
            accessibility of my code.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
