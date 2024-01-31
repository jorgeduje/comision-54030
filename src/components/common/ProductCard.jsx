
export const ProductCard = ( {titulo, desc, precio} ) => {

    // const  { titulo, desc, precio } = prop

  return (
    <div style={{border: "2px solid black"}}>
        <h4>{titulo}</h4>
        <h3>{desc}</h3>
        <h3>{precio}</h3>
    </div>
  )
}

