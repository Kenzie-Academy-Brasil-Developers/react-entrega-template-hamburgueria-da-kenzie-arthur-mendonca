import { toast } from "react-toastify";

export function ToastySuccess(text) {
  toast.success(`Você adicionou ${text} ao carrinho`, {
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
