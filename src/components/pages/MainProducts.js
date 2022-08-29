function MainProducts(props) {
  return (
    <div>
      <p>Main products</p>
      <ol>
        {props.productItems.map((product, index) => (
          <li key={index}> {product} </li>
        ))}
      </ol>
    </div>
  );
}

export default MainProducts;
