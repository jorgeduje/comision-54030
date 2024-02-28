import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [ ]---> {} ---> [{1}] ---> [{1}, {3}]

  const addToCart = (product) => {
    let existe = isInCart(product.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const removeById = (id)=>{
    let newArray = cart.filter((elemento)=> elemento.id !== id ) // ---> []
    setCart(newArray)
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
