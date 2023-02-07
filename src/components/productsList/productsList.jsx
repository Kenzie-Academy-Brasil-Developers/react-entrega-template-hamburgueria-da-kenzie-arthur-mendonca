// Renderizar lista de produtos
import { useState } from "react";
import Card from "../card/card.jsx";
import { StyledSection } from "./productsList.js";

function ProductsList({ products, addFoodToCart, searchFood, searchResult }) {
  return (
    <StyledSection>
      <Card
        products={products}
        addFoodToCart={addFoodToCart}
        searchFood={searchFood}
        searchResult={searchResult}
      />
    </StyledSection>
  );
}

export default ProductsList;
