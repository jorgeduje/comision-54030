import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
