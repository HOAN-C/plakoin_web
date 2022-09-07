import classes from "./MainProducts.module.css";

export default function MainProducts(props) {
  return (
    <article className={classes.componentBox}>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>MAIN PRODUCTS</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.itemBox}>
        {props.mainProducts.map((product, index) => (
          <div className={classes.item}>
            <div className={classes.imgContainer}>
              <img
                className={classes.img}
                src={product.img}
                alt={product.name}
              ></img>
            </div>
            <div className={classes.nameContainer} key={index}>
              <p className={classes.name}>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
