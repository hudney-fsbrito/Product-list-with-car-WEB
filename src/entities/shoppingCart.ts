/* import { v4 as uuidv4 } from "uuid";
import { Product } from "./products";
class ShoppingCart {
  private _idOfCart: string = uuidv4();
  private _nameProductCart: string;
  private _quantityOfProduct: number;
  private _priceCart: number;
  private _totalPrice: number = 0.00;

  constructor(nameProduct: string, quantityOfProduct: number, price: number) {
    this._nameProductCart = nameProduct;
    this._quantityOfProduct = quantityOfProduct;
    this._priceCart = price;
  }

  addToCart (product:Product){
    this._nameProductCart = product.getNameProduct;
    this._priceCart = product.getPrice;
    this._totalPrice += this._priceCart
  }
} 

const item = new ShoppingCart
*/

import { Product } from "./products";

export class ShoppingCart {
  private static _products: Product[] = [];
  private static _totalPrice: number = 0.0;

  static addCart(product: Product) {
    ShoppingCart._totalPrice += product.getPrice;
    ShoppingCart._products.push(product);
  }

  static get products() {
    return this._products;
  }  
  
  // get total() {
  //   return this._totalPrice
  // }
  
}
