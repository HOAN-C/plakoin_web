import classes from "./BriefHistory.module.css";

export default function BriefHistory(props) {
  return (
    <article className={classes.componentBox}>
      <div className={classes.titleBox}>
        <p className={classes.title}>Brief History</p>
        <p className={classes.date}>Nov 2014 ~ Now</p>
      </div>
      <ul className={classes.itemBox}>
        {props.briefHistory.map((content) => (
          <li className={classes.item} key={content.year}>
            <div className={classes.year}>{content.year}</div>
            <ul>
              {content.content.map((article, index) => (
                <li key={content + " " + index} className={classes.article}>
                  {article}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
