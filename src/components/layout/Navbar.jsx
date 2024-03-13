import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";
import { menuNavigation } from "../../router/menuNavigation";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Comision 54030
        </Link>
        <ul className="categories">
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              {text}
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
