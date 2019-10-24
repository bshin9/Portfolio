import React from "react";
import "./About.css";
import image from "../../Images/me.gif";

const about = () => {
  return (
    <div>
      <div className="header">
        <img className="image" src={image} alt="brian" />
      </div>
      <h1 className="title">About Me</h1>
      <p className="pTxt">
        My name is Brian Shin. Born in South Korea and traveled to the United
        States when I was 7 years old. I have been fortunate enough to grow up
        experiencing two distinguished cultures. I have learned to deal with
        adversity and overcome obstacles no matter how difficult it may seem. My
        introduction to tech, like my journey in the United States, was not a
        linear one. I have not been coding for very long, but I believe that my
        willingness to work harder than others will prove to be my forte.
      </p>
      <hr />
      <h2 className="title">Skills</h2>
      <div className="skill-icons">
        <ul>
          <li>
            <i className="fab skill fa-html5" />
          </li>
          <li>
            <i className="fab skill fa-css3" />
          </li>
          <li>
            <i className="fab skill fa-js"></i>
          </li>
          <li>
            <i className="fab skill fa-react"></i>
          </li>
          <li>
            <i className="fab skill fa-node-js"></i>
          </li>
          <li>
            <i className="fab skill fa-npm"></i>
          </li>
          <li>
            <i className="fas skill fa-database"></i>
          </li>
          <li>
            <i className="fas skill fa-server"></i>
          </li>
        </ul>
      </div>
      <hr />
      <div className="contact">
        <h2 className="title">Contact Me</h2>
        <p className="pTxt">
          Feel free to contact me by my email. I've also provided social media
          links at the bottom if you would like to reach out to me there.
        </p>
        <a href="mailto:bshin9@yahoo.com" aria-label="email">
          <button className="myButton">bshin9@yahoo.com</button>
        </a>
      </div>
    </div>
  );
};

export default about;
