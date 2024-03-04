import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css"
export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            {item.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            {item.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> $
            {item.price}.-
          </h2>
        </div>
      </div>
      
        {
          initial && <h3>Ya tienes {initial} en el carrito</h3> 
        }
      
      <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCountContainer 
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      </div>
  );
};
