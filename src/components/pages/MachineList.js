import Card from "../UI/Card";
import classes from "./MachineList.module.css";

function MachineList(props) {
  return (
    <div>
      <h1>Equipment status</h1>
      <div>
        {props.machinesList.map((machine) => (
          <Card className={classes.card}>
            <img className={classes.img} src={machine.img} alt="Loading" />
            <h1>{machine.name}</h1>
            <p>KOR: {machine.KOR} Unit</p>
            <p>IND: {machine.IND} Unit</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MachineList;
