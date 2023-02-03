import { useState } from "react";
import { ButtonRemove } from "./button.js";

function ButtonRemoveAll({ setCurrentSale, setCartTotal }) {
  function resetCartTotal() {
    setCurrentSale([]);
    setCartTotal(0);
  }

  return (
    <span>
      <ButtonRemove onClick={resetCartTotal}>Remover todos itens</ButtonRemove>
    </span>
  );
}

export default ButtonRemoveAll;

// Como zerar a soma total quando eu clico em remover todos os itens?
// O React não permite dois eventos de clique na mesma tag
