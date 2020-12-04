import React from "react";
import "./skills.css";
import Javascript from "./Icons/javascript.svg";
import ReactIcon from "./Icons/react.svg";
import NodeJs3 from "./Icons/node-js (2).svg";
import Mysql from "./Icons/mysql.svg";
import C1 from "./Icons/c (1).svg";
import C2 from "./Icons/c (2).svg";
import Java from "./Icons/java.svg";

function Skills() {
  return (
    <div className="content-skills">
      <div className="icons">
        <img  src={Javascript} alt="javascript" />
        <img  src={ReactIcon} alt="react" />
        <img  src={NodeJs3} alt="node" />
        <img  src={Mysql} alt="mysql" />
        <img  src={C1} alt="C" />
        <img  src={C2} alt="C" />
        <img  src={Java} alt="Java" />
      </div>
    </div>
  );
}

export default Skills;
