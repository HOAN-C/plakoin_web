import classes from "./Partners.module.css";

function Partners(props) {
  return (
    <div>
      <h1>Our partners</h1>
      <div className={classes.box}>
        {props.partners.map((partner) => (
          <div className={classes.item}>
            <img className={classes.img} src={partner.logo} alt="companyLogo" />
            <div>{partner.name}</div>
            <div>{partner.country}</div>
            <div>{partner.mainProduct}</div>
            <div>{partner.addr}</div>
            <div>{partner.web}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
