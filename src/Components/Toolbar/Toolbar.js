import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">Brian Shin</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink className="nav-link" to="/">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
