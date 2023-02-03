import { useState } from "react";
import { useEffect } from "react";
import api from "./components/services/api";
import ProductsList from "./components/productsList/productsList.jsx";
import Header from "./components/header/header.jsx";
import { AppStyle } from "./AppStyle";
import Cart from "./components/cart/cart.jsx";

function App() {
  const [products, setProducts] = useState([]); // lista de produtos recebida pela API
  const [currentSale, setCurrentSale] = useState([]); // lista de produtos no carrinho
  const [cartTotal, setCartTotal] = useState(0); // soma total do carrinho
  const [searchResult, setSearchResult] = useState(""); //resultados da busca no search

  function addFoodToCart(element) {
    if (!currentSale.find((food) => food.id === element.id)) {
      setCurrentSale([...currentSale, element]);
      setCartTotal(cartTotal + element.price);
    }
  }

  function removeFoodFromCart(id) {
    const filtered = currentSale.filter((food) => food.id !== id);
    const subtract = currentSale.find((food) => food.id === id);

    setCartTotal(cartTotal - subtract.price);
    return setCurrentSale(filtered);
  }

  useEffect(() => {
    async function getDataFromApi() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);

  return (
    <AppStyle className="App">
      <Header setSearchResult={setSearchResult} searchResult={searchResult} />
      <div className="frontPage__wrapper">
        <ProductsList
          products={products}
          setCurrentSale={setCurrentSale}
          addFoodToCart={addFoodToCart}
          searchResult={searchResult}
        />
        <Cart
          currentSale={currentSale}
          removeFoodFromCart={removeFoodFromCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </AppStyle>
  );
}

export default App;
