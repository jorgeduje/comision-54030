import { ProductCard } from "../../common/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(({id, img, title, description, price}) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
