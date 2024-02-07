import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // creamos o solicitamos
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject( "error" );
    });

    // manejar

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <>
  
     <ItemList items={items} /> 
  
    </>
  );
};

export default ItemListContainer;
