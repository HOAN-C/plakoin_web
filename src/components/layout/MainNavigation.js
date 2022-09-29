import React from "react";
import classes from "./MainNavigation.module.css";
import ScrollIntoView from "react-scroll-into-view";

export default function MainNavigation() {
  return (
    <header className={classes.componentBox}>
      <a href="/" className={classes.logo}>
        <div className={classes.ptName}>PLAKOIN</div>
        <div className={classes.country}>INDONESIA</div>
      </a>
      <nav>
        <ul className={classes.menu}>
          <li className={classes.dropdownBtn}>
            <div className={classes.menuItem}>Introdution</div>
            <div className={classes.dropdownContent}>
              <ScrollIntoView selector="#test">
                <button>· main products</button>
              </ScrollIntoView>
              <a href="/">· partner company</a>
              <a href="/">· equipment status</a>
              <a href="/">· brief history</a>
              <a href="/">· organization chart</a>
            </div>
          </li>
          <li>
            <a className={classes.menuItem} href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
