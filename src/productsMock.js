export let products = [
 
  {
   
    title: "wilson advance",
    price: 14500,
    stock: 5,
    description: "Ultra livianas y cuentan con camara de aire",
    category: "deportivas",
    img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669430010/foc364fsakkzmausrovn.jpg",
  },
  {
  
    title: "Jaguar",
    price: 17800,
    stock: 5,
    description: "Zapatillas de ultima generacion para el deporte",
    category: "urbanas",
    img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669430220/rtokwmt3j03bblbfhwhb.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
