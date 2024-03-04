import ItemList from "./ItemList";
import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Box, CircularProgress } from "@mui/material";
import { CardSkeleton } from "../../common/CardSkeleton";

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

  // if con return temprano

  if( isLoading ){
    return  <div style={{display: "flex"}}>
       <CardSkeleton />
       <CardSkeleton />
       <CardSkeleton />
       <CardSkeleton />
       </div>
  }

  return (
    <>
     
    
        <ItemList products={products} />
  
      {/* {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ItemList products={products} />
      )} */}

      {/* <ItemList products={products} /> */}
      {/* {
      isLoading && <h1>Cargando</h1> 
    } */}
    </>
  );
};

export default ItemListContainer;

// const suma = ()=>{

//   if(){
//     return 2
//   }

//   return items
// }
