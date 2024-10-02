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
  private static _totalPrice: number = 0;
  private static _quantityCart: number = 0;


  static calculateQuantity() {
    this._totalPrice = 0;
    this._quantityCart = 0;

    this.products.forEach((product) => {
      this._totalPrice += product.getTotal;
      this._quantityCart += product.getQuantity; 
    });
  }

  toHenderCart() {
    
    const container_page = document.querySelector(".container-page")
    const divCar = document.createElement("div");
    divCar.className = "cart"

    divCar.innerHTML = `
      <h3 class="title-cart">Your Cart(7)</h3>
        <div class="product-item">
          <div class="product-item-info">
            <h4 class="product-name-cart">Waffle with Berries</h4>
            <div class="product-item-prices">
              <p class="quantity-product">1x</p>
              <p class="product-price">&dollar;6.50</p>
              <p class="total-product-price">&dollar;6.50</p>
            </div>
          </div>
          <div>
            <img class="icon-remove-item" src="assets/images/icon-remove-item.svg" alt="Ícone para excluir item">
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-info">
            <h4 class="product-name-cart">Waffle with Berries</h4>
            <div class="product-item-prices">
              <p class="quantity-product">1x</p>
              <p class="product-price">&dollar;6.50</p>
              <p class="total-product-price">&dollar;6.50</p>
            </div>
          </div>
          <div>
            <img class="icon-remove-item" src="assets/images/icon-remove-item.svg" alt="Ícone para excluir item">
          </div>
        </div>
        <div class="order-total">
          <p>Order Total</p>
          <p class="total-cart">&dollar;6.50</p>
        </div>
        <div>
          <button class="btn-delivery">
            <img src="assets/images/icon-carbon-neutral.svg" alt="">
            This is a <span>carbon-neutral</span> delivery
          </button>
          <button class="btn-confirm-order">Confirm Order</button>
        </div>

    `
    container_page?.appendChild(divCar)
  }

  static addCart(product: Product) {
    // const existingProduct = this.products.find(cartProduct => cartProduct.getId === product.getId);
    const existingProduct = this.products.includes(product);
    
    if (!existingProduct) {
      this._products.push(product);
      
    }
      
    this.calculateQuantity()
  }

  static removeProductCart(product: Product) {
    // this._products = this._products.findIndex((item)=> item.getId === product.getId);
    this._products = this._products.filter((item)=> item.getId !== product.getId);

    this.calculateQuantity()
  }

  static get products() {
    return this._products;
  }  
  
  
}
