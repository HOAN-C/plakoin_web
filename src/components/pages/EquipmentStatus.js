import classes from "./EquipmentStatus.module.css";

function EquipmentStatus(props) {
  return (
    <article className={classes.box}>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>Equipment status</h1>
        {/* <div>
          <button>card</button>
          <button>excell</button>
        </div> */}
      </div>
      <div className={classes.itemContainer}>
        {props.equipmentStatus.map((machine) => (
          <div className={classes.item}>
            <div className={classes.imgBox}>
              <img className={classes.img} src={machine.img} alt="Loading" />
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
