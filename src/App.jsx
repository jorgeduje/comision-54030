import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/Navbar";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
