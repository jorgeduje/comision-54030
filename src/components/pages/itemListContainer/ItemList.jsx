
const ItemList = ( {nombre, saludar, saludar2} ) => {

  return (
    <div>
      <h2>Hola {nombre}</h2>
      <button onClick={saludar} >Saludar</button>
      <button onClick={saludar2} >Saludar2</button>
    </div>
  );
};

export default ItemList;
