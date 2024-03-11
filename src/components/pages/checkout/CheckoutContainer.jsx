import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { db } from "../../../firebaseConfig";



export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null)

  const {cart, getTotalPrice, clearCart} = useContext(CartContext)

  let totalPrice = getTotalPrice()

  const envioDeFormulario = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice
    }

    let ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then( (res)=> setOrderId(res.id))
   
    cart.forEach((product)=>{

      let refDoc = doc(db, "products", product.id )

      updateDoc( refDoc , {stock: product.stock - product.quantity } )
    })

    clearCart()
    

  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout orderId={orderId} envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};


// put {title: das , price: 12 , stock: 12 - 3, }
// patch  { stock: 12 - 3, }