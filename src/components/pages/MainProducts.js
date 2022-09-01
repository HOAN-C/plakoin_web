import classes from "./MainProducts.module.css";

export default function MainProducts(props) {
  return (
    <article className={classes.box}>
      <h1 className={classes.sub}>MAIN PRODUCTS</h1>
      <div>
        {props.productItems.map((product, index) => (
          <div className={classes.item}>
            <img className={classes.img} src={product.img} alt="Loading"></img>
            <li key={index}> {product.name} </li>
          </div>
        ))}
      </div>
    </article>
  );
}
