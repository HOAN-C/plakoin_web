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
          <li className={classes.dropdown}>
            <a className={classes.dropbtn} href="/">
              Introdution
            </a>
            <div className={classes.dropdownContent}>
              <a href="/">· main products</a>
              <a href="/">· partner company</a>
              <a href="/">· equipment status</a>
              <a href="/">· brief history</a>
              <a href="/">· organization chart</a>
              <a href="/">· contact us</a>
            </div>
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
