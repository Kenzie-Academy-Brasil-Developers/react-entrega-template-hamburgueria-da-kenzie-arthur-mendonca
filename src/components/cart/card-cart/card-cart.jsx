import { StyledCartList } from "./card-cart.js";

function CardCart({ currentSale, removeFoodFromCart }) {
  return (
    <StyledCartList>
      {currentSale.map((e) => (
        <li>
          <div className="imgDiv">
            <img src={e.img} alt={e.name} />
          </div>
          <div className="middleDiv">
            <p>{e.name}</p>
            <small>{e.category}</small>
          </div>
          <div className="lastDiv">
            <button onClick={() => removeFoodFromCart(e.id)}>
              Remover item
            </button>
          </div>
        </li>
      ))}
    </StyledCartList>
  );
}

export default CardCart;
