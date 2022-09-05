import classes from "./Partners.module.css";

function Partners(props) {
  return (
    <div className={classes.componentBox}>
      <div className={classes.titleBox}>
        <p className={classes.title}>Partner company</p>
        <div className={classes.line}></div>
      </div>
      <div className={classes.container}>
        {props.partners.map((partner) => (
          <a className={classes.item} href={partner.web} target=" ">
            <div className={classes.imgBox}>
              <img
                className={classes.img}
                src={partner.logo}
                alt="companyLogo"
              />
            </div>
            <div className={classes.desc}>
              <div className={classes.name}>{partner.name}</div>
              <div className={classes.mainProduct}>{partner.mainProduct}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Partners;
