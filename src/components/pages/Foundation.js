import classes from "./Foundation.module.css";

function Foundation() {
  return (
    <div className={classes.box}>
      <p className={classes.since}>Since</p>
      <p className={classes.date}>Nov 2019 ~ Now</p>
    </div>
  );
}

export default Foundation;
