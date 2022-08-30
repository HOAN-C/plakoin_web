import classes from "./MachineList.module.css";

function MachineList(props) {
  return (
    <div>
      <h1>Equipment status</h1>
      <div className={classes.box}>
        {props.machinesList.map((machine) => (
          <div className={classes.card}>
            <img className={classes.img} src={machine.img} alt="Loading" />
            <h1 className={classes.name}>{machine.name}</h1>
            <p>KOR: {machine.KOR} Unit</p>
            <p>IND: {machine.IND} Unit</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MachineList;
