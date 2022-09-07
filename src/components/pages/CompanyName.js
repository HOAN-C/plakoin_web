import React from "react";
import classes from "./CompanyName.module.css";

function CompanyName() {
  return (
    <article className={classes.componentBox}>
      <header className={classes.titleBox}>
        <h1 className={classes.title}>PLAKOIN</h1>
        <div>
          <span className={classes.span1}>Accuracy, </span>
          <span className={classes.span2}>Innovation, </span>
          <span className={classes.span3}>Long-term relationship</span>
        </div>
      </header>
    </article>
  );
}

export default CompanyName;
