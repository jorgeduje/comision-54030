import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  return (
    <div>
      <h2>Estamos trabajando en el carrito...</h2>
      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
