import React, { useEffect, useState } from "react";
import "./skills.css";
import Estrella from "./Icons/estrella.svg";
import { skills } from "./skills.js";

function Skills() {
  const [courses, setcourses] = useState([]);

  const onClick = (link) => {
    console.log("link", link);
    window.open(`https://platzi.com${link}`);
  };
  useEffect(() => {
    fetch(
      "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@LuisParedez"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.userData.courses);
        setcourses(data.userData.courses);
      });
  }, []);
  return (
    <>
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
      <div className="line" />
      <div className="content-title">
      <img src={Estrella} alt="estrella-1" />
      <h1 style={{ textAlign: "center" }}>Certificates Platzi</h1>
      <img src={Estrella} alt="estrella-2" />
      </div>
      <div className="line" />
      <div className="courses">
        {courses.map((item, index) => {
          return (
            <div className="course" key={index}>
              <img src={item.badge} alt={`${index}`} />
              <p>{item.title}</p>
              <button
                onClick={() => {
                  onClick(item.diploma_link);
                }}
              >
                view certificate
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
