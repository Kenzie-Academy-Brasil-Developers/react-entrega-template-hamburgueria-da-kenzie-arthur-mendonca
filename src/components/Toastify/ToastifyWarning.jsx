import { toast } from "react-toastify";

export function ToastCannotAdd(item) {
  toast.warn(` Máximo número de ${item} atingido no carrinho`, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
