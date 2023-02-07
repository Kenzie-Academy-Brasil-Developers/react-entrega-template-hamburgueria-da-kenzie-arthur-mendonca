import { StyledSection } from "./card.js";
import SearchFood from "../searchFood/searchFood.jsx";

function Card({ products, addFoodToCart, searchResult }) {
  console.log(products);
  return (
    <StyledSection>
      <SearchFood
        products={products}
        searchResult={searchResult}
        addFoodToCart={addFoodToCart}
      />
    </StyledSection>
  );
}

export default Card;
