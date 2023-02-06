import { toast } from "react-toastify";

export function ToastRemoveAll() {
  toast.warn(` Você removeu todos itens do carrinho`, {
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
