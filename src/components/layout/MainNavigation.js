import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/" id={classes.logo}>
        <div className={classes.ptName}>PLAKOIN</div>
        <div className={classes.country}>INDONESIA</div>
      </Link>
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
