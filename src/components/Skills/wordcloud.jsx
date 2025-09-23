import React, { useEffect, useState } from "react";

import TagCloud from "TagCloud";

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true);

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
    "supabase",
    "RESTAPI",
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
    "MaterialUI",
    "DataBase Management",
    "PHP",
    "Problem Solving",
  ];
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  };
  //   to render wordcloud each time the page is reloaded
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options);
      setLoad(false);
    }
  });

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
