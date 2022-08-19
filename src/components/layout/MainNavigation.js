import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PLAKOIN IND</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Introdution</Link>
          </li>
          <li>
            <Link to="/">Address</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
