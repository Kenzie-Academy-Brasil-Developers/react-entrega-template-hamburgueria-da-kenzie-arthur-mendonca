import { useState } from "react";
import { StyledSectionSearch } from "../searchFood/searchFood";

function SearchFood({ products, searchResult, addFoodToCart }) {
  const search = products.filter((food) => {
    return searchResult === ""
      ? true
      : food.name.toLowerCase().includes(searchResult.toLowerCase()) ||
          food.category.toLowerCase().includes(searchResult.toLowerCase());
  });

  return (
    <StyledSectionSearch>
      {search.map((element) => (
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
    </StyledSectionSearch>
  );
}

export default SearchFood;
