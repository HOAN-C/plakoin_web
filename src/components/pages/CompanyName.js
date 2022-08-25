import React from "react";
import classes from "./CompanyName.module.css";

/* 
<li>Flakoin Indonesia</li>
<li>Foundation Date</li>
<li>Main Product</li>
<li>Facilities</li>
<li>Partners</li>
<li>History</li>
<li>Organiztion chart</li>
  */

function CompanyName() {
  return (
    <div className={classes.back}>
      <article className={classes.article}>
        <p>Accuracy, Innovation, Long-term relationship</p>
        <p>Plakoin</p>
      </article>
    </div>
  );
}

export default CompanyName;
