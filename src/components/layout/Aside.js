import classes from "./Aside.module.css";

function Aside() {
  return (
    <aside className={classes.box}>
      <ul className={classes.ul}>
        <li>Flakoin Indonesia</li>
        <li>Foundation Date</li>
        <li>Main Product</li>
        <li>Organiztion chart</li>
        <li>Facilities</li>
        <li>History</li>
        <li>Partners</li>
      </ul>
    </aside>
  );
}

export default Aside;
