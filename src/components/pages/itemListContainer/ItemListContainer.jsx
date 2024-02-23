import ItemList from "./ItemList";
import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      // Verifico si existe una category en el parámetro
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        // Guardamos los productos filtrados por categoría en nuestro state products
        setProducts(productsFilter);
      } else {
        // Si no tenemos una category almacenamos todos los productos
        setProducts(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {isLoading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
