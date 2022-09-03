import classes from "./EquipmentStatus.module.css";

function EquipmentStatus(props) {
  return (
    <article>
      <h1>Equipment status</h1>
      <div className={classes.box}>
        {props.equipmentStatus.map((machine) => (
          <div className={classes.card}>
            <img className={classes.img} src={machine.img} alt="Loading" />
            <h1 className={classes.name}>{machine.name}</h1>
            <p>KOR: {machine.KOR} Unit</p>
            <p>IND: {machine.IND} Unit</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default EquipmentStatus;
