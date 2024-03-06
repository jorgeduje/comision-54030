import ItemList from "./ItemList";
import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CardSkeleton } from "../../common/CardSkeleton";
import "./ItemListContainer.css";
const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }

      setIsLoading(false);
    });
  }, [category]);


  if (isLoading) {
    return (
      <div className="cards-container">
        {category ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
