import React from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <a href="/" id={classes.logo}>
        <div className={classes.ptName}>PLAKOIN</div>
        <div className={classes.country}>INDONESIA</div>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Introdution</a>
          </li>
          <li>
            <a href="/">Address</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
