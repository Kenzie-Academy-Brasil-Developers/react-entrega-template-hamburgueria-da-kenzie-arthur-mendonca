import { ButtonRemove } from "./button.js";
import { ToastRemoveAll } from "../Toastify/ToastyRemoveAll.jsx";

function ButtonRemoveAll({ setCurrentSale, setCartTotal }) {
  function resetCartTotal() {
    setCurrentSale([]);
    setCartTotal(0);
    ToastRemoveAll();
  }

  return (
    <span>
      <ButtonRemove onClick={resetCartTotal}>Remover todos itens</ButtonRemove>
    </span>
  );
}

export default ButtonRemoveAll;
