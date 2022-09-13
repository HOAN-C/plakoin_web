import React from "react";
import classes from "./CompanyName.module.css";

function CompanyName() {
  return (
    <article className={classes.componentBox}>
      <h1 className={classes.titleBox}>
        <h1 className={classes.title}>PLAKOIN</h1>
        <div>
          <span className={classes.span1}>Accuracy, </span>
          <span className={classes.span2}>Innovation, </span>
          <span className={classes.span3}>Long-term relationship</span>
        </div>
      </h1>
      <div className={classes.imgBox}>
        <img
          className={classes.mouse}
          src="img/CompanyName/mouse.png"
          alt="mouse"
        />
        <img
          className={classes.arrow}
          src="img/CompanyName/next.png"
          alt="arrow"
        />
      </div>
    </article>
  );
}

export default CompanyName;
