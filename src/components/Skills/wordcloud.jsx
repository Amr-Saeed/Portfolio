import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const WordCloud = () => {
  const container = ".content";

  const texts = [
    "Python",
    "Typescript",
    "JavaScript",
    "C++",
    "SQL",
    "Bash",
    "React",
    "NextJS",
    "Supabase",
    "REST API",
    "MySQL",
    "OpenCV",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "Linux",
    "HTML5",
    "CSS3",
    "C",
    "Solidity",
    "Bootstrap",
    "Tailwind",
    "Figma",
    "Algorithms",
    "Data Structures",
    "OOP",
    "ShadCN",
    "Material UI",
    "Database Management",
    "PHP",
    "Problem Solving",
  ];

  const options = {
    maxSpeed: "fast",
    initSpeed: "fast",
    direction: 135,
    keep: true,
  };

  const getRadius = () => {
    const width = window.innerWidth;

    if (width < 480) return 120;   // mobile
    if (width < 768) return 160;   // small tablets
    if (width < 1024) return 220;  // tablets
    return 300;                    // desktop
  };

  useEffect(() => {
    const renderCloud = () => {
      const el = document.querySelector(container);
      if (!el) return;

      el.innerHTML = ""; // prevent duplicates

      TagCloud(container, texts, {
        ...options,
        radius: getRadius(),
      });
    };

    renderCloud();
    window.addEventListener("resize", renderCloud);

    return () => {
      window.removeEventListener("resize", renderCloud);
    };
  }, []);

  return (
    <div className="tagcloud-wrap">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;