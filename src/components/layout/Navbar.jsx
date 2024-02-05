import CartWidget from "../common/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h3>logo</h3>
      <ul>
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>
      <h4>Carrito</h4>
      <CartWidget />
    </div>
  );
};
