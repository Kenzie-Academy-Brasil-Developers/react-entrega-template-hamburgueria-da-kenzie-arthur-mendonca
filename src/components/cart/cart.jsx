import { useState } from "react";
import CardCart from "./card-cart/card-cart.jsx";
import { StyledCart } from "./cart.js";
import TotalCart from "./totalCart/totalCart.jsx";

function Cart({
  currentSale,
  removeFoodFromCart,
  cartTotal,
  setCartTotal,
  setCurrentSale,
}) {
  return (
    <StyledCart>
      <header>
        <h2>Carrinho de compras</h2>
      </header>
      {currentSale.length === 0 && (
        <h3 className="emptyCart">Ainda não há itens no carrinho</h3>
      )}
      {currentSale.length !== 0 && (
        <div>
          <CardCart
            currentSale={currentSale}
            removeFoodFromCart={removeFoodFromCart}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
          <TotalCart
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
            setCartTotal={setCartTotal}
          />
        </div>
      )}
    </StyledCart>
  );
}

export default Cart;
