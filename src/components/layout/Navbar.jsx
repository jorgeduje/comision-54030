import { Link, Outlet } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Comision 54030
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
