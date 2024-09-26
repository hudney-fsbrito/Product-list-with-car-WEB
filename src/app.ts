import data from "../data.json";
import { Product } from "../src/entities/products";
import { ShoppingCart } from "./entities/shoppingCart";

/* for (const product of data) {
  const productItem = new Product(
    product.name,
    product.price,
    product.category,
    product.image.desktop
  )
  productItem.toHender();
} */

/* const createProduct = () => {
  data.map((productItem) => {
    const product = new Product(
      productItem.name,
      productItem.price,
      productItem.category,
      productItem.image.desktop
    );
    product.toHenderProducts();
  });
};
createProduct() */
// console.log(createProduct());

const banana = new Product(
  data[0].name,
  data[0].price,
  data[0].category,
  data[0].image.desktop
)
banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();

const maca = new Product(
  data[1].name,
  data[1].price,
  data[1].category,
  data[1].image.desktop
)
maca.incrementQuantity();
maca.incrementQuantity();
const pera = new Product(
  data[3].name,
  data[3].price,
  data[3].category,
  data[3].image.desktop
)
pera.incrementQuantity();
pera.incrementQuantity();

console.log(ShoppingCart);



/* 


const cart = new ShoppingCart()

cart.addCart(product1)
cart.addCart(product2)

console.log(cart.products);
console.log(cart.products.length);
console.log(cart.total); */
