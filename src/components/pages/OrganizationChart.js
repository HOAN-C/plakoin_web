import classes from "./OrganizationChart.module.css";

export default function OrganizationChart() {
  return (
    <article className={classes.componentBox}>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>Organization Chart</h1>
      </div>
      <div className={classes.itemBox}>
        <img
          src="img/OrganizationChart/OrganizationChart(IND).png"
          alt="OrganizationChart"
        />
      </div>
    </article>
  );
}
