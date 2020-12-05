import React from "react";
import "./skills.css";

import {
  Javascript,
  ReactIcon,
  NodeJs3,
  Mysql,
  C1,
  C2,
  Java,
} from "./integrations.js";

function Skills() {
  const skills = [
    { item: Javascript, progress: 95 },
    { item: ReactIcon, progress: 85 },
    { item: NodeJs3, progress: 60 },
    { item: Mysql, progress: 50 },
    { item: C1, progress: 60 },
    { item: C2, progress: 60 },
    { item: Java, progress: 50 },
  ];
  return (
    <>
      <div className="content-skills">
        <div className="icons">
          {skills.map((item, index) => {
            return (
              <div className="icon" key={index}>
                <img src={item.item} alt={`${index}`} />
                <div className="content-progress">
                  <div className={`progress-bar progress-bar-${index}`}>
                    {item.progress}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content-certifications"></div>
    </>
  );
}

export default Skills;
