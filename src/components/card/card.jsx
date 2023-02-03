import { StyledCard } from "./card";
import { StyledSection } from "./card";
import SearchFood from "../searchFood/searchFood.jsx";

function Card({ products, addFoodToCart, searchResult }) {
  return (
    <StyledSection>
      {searchResult !== [] ? (
        <SearchFood
          products={products}
          searchResult={searchResult}
          addFoodToCart={addFoodToCart}
        />
      ) : (
        <StyledCard>
          {products.map((element) => (
            <li key={element.id}>
              <div className="img__div">
                <img src={element.img} alt={element.name} />
              </div>
              <div className="product__info-wrapper">
                <h5>{element.name}</h5>
                <span>{element.category}</span>
                <p>
                  {Number(element.price).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button
                  id={element.id}
                  onClick={() => {
                    addFoodToCart(element);
                  }}
                >
                  Adicionar
                </button>
              </div>
            </li>
          ))}
        </StyledCard>
      )}
    </StyledSection>
  );
}

export default Card;
