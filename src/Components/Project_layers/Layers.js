import React from "react";
import "../Project_layers/Layers.css";
import calculator from "../../Images/calc.jpg";
import icon from "../../Images/button.jpg";
import nodejs from "../../Images/nodejs.jpeg";
import sql from "../../Images/mysql.jpg";
import order from "../../Images/order.jpg";
import unit from "../../Images/unittest.jpg";
import ecommerce from "../../Images/properAuth.png";
import semantic from "../../Images/semantic.jpg";

const layers = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/Icon_Change"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="status"
          >
            <div className="content-overlay" />
            <img className="content-image" src={icon} alt="icon" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Icon Changing Challenge</h3>
              <p className="content-text">
                Using CSS and Babel JavaScript, I changed the color of the
                button when clicked.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/JS_Calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={calculator} alt="calc" />
            <div className="content-details fadeIn-top">
              <h3>JS Calulator</h3>
              <p>
                Utilizing JavaScript, I have built a calculator that will run
                simple equations such as addition, subtraction, multiplication,
                and division.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/Unit_Tests"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={unit} alt="tests" />
            <div className="content-details fadeIn-left">
              <h3>Unit Testing</h3>
              <p>
                I created a function and then tested that function using NodeJs.
                Ensuring that the function was properly working.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/SQL_Challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={sql} alt="sql" />
            <div className="content-details fadeIn-right">
              <h3>SQL Challenges</h3>
              <p>
                These are a collection of mySQL challenges varying in difficulty
                from very easy to very hard.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/NodeJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={nodejs} alt="node" />
            <div className="content-details fadeIn-top fadeIn-left">
              <h3>NodeJS</h3>
              <p>
                These challenges using NodeJs allowed me to test my api
                endpoints to make sure my servers were up and running. I'm able
                to verify that my JSON data is being retrieved.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/Sorting_array"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={order} alt="sort" />
            <div className="content-details fadeIn-top fadeIn-right">
              <h3>Sorting Array</h3>
              <p>
                I'm using HTML and JavaScript in order to sort names in a array
                in alphabetical order by last name. Then we use some CSS to
                manipulate the color of text.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/EcomPWA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={ecommerce} alt="ecommerce" />
            <div className="content-details fadeIn-bottom fadeIn-left">
              <h3>React Ecommerce App</h3>
              <p>
                Using React, CSS, NodeJS, and MongoDB I have created a ecommerce
                website. I've created five pages: home, products, contacts, sign
                in, and logout. As well as an additional profile page after
                you've logged in. I'm using a MongoDB as my database structure
                and getting my products and contacts through axios.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a
            href="https://github.com/bshin9/html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <img className="content-image" src={semantic} alt="ecommerce" />
            <div className="content-details fadeIn-bottom fadeIn-left">
              <h3>Semantic HTML</h3>
              <p>
                Showing what semantic html looks like.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default layers;
