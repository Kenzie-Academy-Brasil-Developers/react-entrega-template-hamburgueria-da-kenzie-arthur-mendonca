// Renderizar lista de produtos
import { useState } from "react";
import Card from "../card/card.jsx";

function ProductsList({ products, addFoodToCart, searchFood, searchResult }) {
  return (
    <Card
      products={products}
      addFoodToCart={addFoodToCart}
      searchFood={searchFood}
      searchResult={searchResult}
    />
  );
}

export default ProductsList;
