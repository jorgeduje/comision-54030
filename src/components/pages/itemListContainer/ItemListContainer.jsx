import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  // hacemos la peticion a la api
  // useState
  // funciones
  // variables
  const [items, setItems] = useState([]);

  const [nombre, setNombre] = useState("pepe");
  const [apellido, setApellido] = useState("perez")

  const saludar = () => {
    setNombre("maria");
  };
  const saludar2 = () => {
    setNombre("pepe");
  };

  console.log("peticion fuera del effect");

  // useEffect( ()=>{
  //  console.log("se ejecuta dentro")
  // }, []) // array de dependencias

  useEffect(() => {
    console.log("se ejecuta dentro");
  }, [apellido]); // array de dependencias

  return <>
   <ItemList nombre={nombre} saludar={saludar} saludar2={saludar2} />
   <h3>{apellido}</h3>
   <button onClick={()=> setApellido("lopez")}>Cambiar</button>
  </>;
};

export default ItemListContainer;
