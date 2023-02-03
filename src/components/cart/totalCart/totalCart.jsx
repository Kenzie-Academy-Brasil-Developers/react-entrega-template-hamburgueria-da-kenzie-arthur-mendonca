import { StyledTotalCart } from "./totalCart.js";
import { useState } from "react";
import ButtonRemoveAll from "../../button/button.jsx";

function TotalCart({ cartTotal, setCurrentSale, setCartTotal }) {
  return (
    <StyledTotalCart>
      <div className="upper__div">
        <p className="totalWord">Total</p>
        <p className="totalNumber">R$ {cartTotal.toFixed(2)}</p>
      </div>
      <div>
        <ButtonRemoveAll
          setCurrentSale={setCurrentSale}
          setCartTotal={setCartTotal}
        />
      </div>
    </StyledTotalCart>
  );
}

export default TotalCart;

// onClick={setCartTotal(0)}
