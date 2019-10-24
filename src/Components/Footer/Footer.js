import React from "react";
import "./Footer.css";

const footer = () => {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
  var currDate = date;

  return (
    <footer className="footer">
      <div className="social-icons">
        <ul>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="github">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
        <p className="copyright">Last Updated {currDate}</p>
        <p className="copyright">Copyright © Brian Shin & Corp</p>
      </div>
    </footer>
  );
};

export default footer;
