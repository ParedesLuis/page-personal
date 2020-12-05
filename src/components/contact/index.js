import React from "react";
import "./contact.css";
import Google from './icons/google-plus.svg';
import Instagram from './icons/instagram.svg';
import Linked from './icons/linkedin.svg';
import Twitter from './icons/twitter.svg';
import Github from './icons/github.svg';
import { googleContact,linkedinContact,instagramContact, twitterContact,githubRepository } from "./contactFunctions";
function Home() {
  
  return (
    <div className="container-card">
      <div className="card">
        <div className="card-first">
          <div>
            <h1>Contact me</h1>
          </div>
        </div>
        <div className="card-social">
        <img src={Google} alt="google" onClick={googleContact}/>
        <img src={Instagram} alt="insta" onClick={instagramContact}/>
        <img src={Linked} alt="linked" onClick={linkedinContact}/>
        <img src={Twitter} alt="twitter" onClick={twitterContact}/>
        <img src={Github} alt="twitter" onClick={githubRepository}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
