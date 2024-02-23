import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
