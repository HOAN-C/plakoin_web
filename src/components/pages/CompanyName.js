import React from "react";
import classes from "./CompanyName.module.css";

function CompanyName() {
  return (
    <div className={classes.back}>
      <article className={classes.article}>
        <div className={classes.companyName}>PLAKOIN</div>
        <span className={classes.span1}>Accuracy, </span>
        <span className={classes.span2}>Innovation, </span>
        <span className={classes.span3}>Long-term relationship</span>
      </article>
    </div>
  );
}

export default CompanyName;
