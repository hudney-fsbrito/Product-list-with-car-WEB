import data from "../data.json";
import { Product } from "../src/entities/products";

const createProduct = () => {
  data.map((productItem) => {
    const product = new Product(
      productItem.name,
      productItem.price,
      productItem.category,
      productItem.image.desktop
    );
    product.toHenderHTML();
  });
};

createProduct();
