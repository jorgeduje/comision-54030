import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault();

    // ACA VALIDAMOS TODO
    // Aca manipulo lo que quiera hacer con los datos del formulario
    console.log("se envio el formulario");
    console.log(userInfo);
  };

  //   const capturarNombre = (event) => {
  //     setUserInfo( {...userInfo, name: event.target.value} )
  //   };

  //   const capturarApellido = (event) => {
  //     setUserInfo( {...userInfo, lastName: event.target.value } )
  //   };

  const capturar = (event) => {
    console.log(event)
    setUserInfo( {...userInfo, [event.target.name]: event.target.value } )
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};
