import { useEffect, useState } from "react";
import classes from "./Partners.module.css";

function Partners(props) {
  const [position, setPosition] = useState(0);
  function onScrill() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <article className={classes.componentBox}>
      <div
        className={classes.titleBox}
        // style={{
        //   backgroundPositionY: position / 2,
        // }}
      >
        <h1 className={classes.title}>Partner company</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.itemBox}>
        {props.partners.map((partner) => (
          <a
            className={classes.item}
            href={partner.web}
            target=" "
            key={partner.name}
          >
            <div className={classes.imgBox}>
              <img
                className={classes.img}
                src={partner.logo}
                alt="companyLogo"
              />
            </div>
            <div className={classes.desc}>
              <h1 className={classes.name}>{partner.name}</h1>
              <div className={classes.mainProduct}>{partner.mainProduct}</div>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}

export default Partners;
