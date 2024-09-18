import data from "../data.json";
import { Product } from "../src/entities/products";

const createProdutct = () => {
  data.map((productItem) => {
    const product = new Product(
      productItem.name,
      productItem.price,
      productItem.category,
      productItem.image.desktop
    );
    console.log(product);
  });
};
console.log(createProdutct());

// for (let i = 0; i < data.length; i++) {
// }
