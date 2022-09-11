import classes from "./EquipmentStatus.module.css";

function EquipmentStatus(props) {
  return (
    <article className={classes.componentBox}>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>Equipment status</h1>
        {/* <div>
          <button>card</button>
          <button>excell</button>
        </div> */}
      </div>
      <div className={classes.itemBox}>
        {props.equipmentStatus.map((machine, index) => (
          <div className={classes.item} key={machine.name + index}>
            <div className={classes.imgBox}>
              <img className={classes.img} src={machine.img} alt="MachineImg" />
            </div>
            <div className={classes.info}>
              <h1 className={classes.name}>{machine.name}</h1>
              <div className={classes.unitBox}>
                <p className={classes.unit}>KOR: {machine.KOR} Unit</p>
                <p className={classes.unit}>IND: {machine.IND} Unit</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default EquipmentStatus;
