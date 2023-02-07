import SearchFood from "../searchFood/searchFood.jsx";

function Card({ products, addFoodToCart, searchResult }) {
  console.log(products);
  return (
    <SearchFood
      products={products}
      searchResult={searchResult}
      addFoodToCart={addFoodToCart}
    />
  );
}

export default Card;
