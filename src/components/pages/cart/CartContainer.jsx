import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h2>nombre: {product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <button onClick={ ()=> removeById(product.id) }>Eliminar</button>
        </div>
      ))}

      <button onClick={clearCart}>Limpiar carrito</button>

      {/* <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link> */}
    </div>
  );
};
