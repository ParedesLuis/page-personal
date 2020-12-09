import React from "react";
import "./menu.css";

import {
  Link
} from "react-router-dom";

export default function index() {
  return (
    <div className="menu">
      <ul>
        <li className="element"><Link to="/">Home</Link></li>
        <li className="dash">/</li>
        <li className="element"><Link to="/skills">Skills</Link></li>
        <li className="dash">/</li>
        <li className="element"><Link to="/about">About</Link></li>
        <li className="dash">/</li>
        <li className="element"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}
