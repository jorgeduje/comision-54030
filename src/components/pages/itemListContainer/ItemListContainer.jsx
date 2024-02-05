import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
