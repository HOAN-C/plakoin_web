import classes from "./Foundation.module.css";

export default function Foundation() {
  return (
    <article className={classes.box}>
      <p className={classes.since}>Since</p>
      <p className={classes.date}>Nov 2019 ~ Now</p>
    </article>
  );
}
