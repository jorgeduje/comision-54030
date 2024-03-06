import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardSkeleton } from "../../common/CardSkeleton";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection ; // el va saber a quien pedirle los documentos si a todos o a una parte

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <div className="cards-container">
        {category ? (
          <>
            <CardSkeleton />
            {/* <CardSkeleton /> */}
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            {/* <CardSkeleton />
            <CardSkeleton /> */}
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
