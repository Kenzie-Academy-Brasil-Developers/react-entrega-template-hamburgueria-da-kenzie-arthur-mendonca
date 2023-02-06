import { toast } from "react-toastify";

export function ToastInfo(text) {
  toast.info(`Você removeu ${text} do carrinho.`, {
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
