import { v4 as uuidv4 } from "uuid";
import { ShoppingCart } from "./shoppingCart";
import { log } from "console";

export class Product {
  [x: string]: any;
  private _id: string = uuidv4();
  private _nameProduct: string;
  private _price: number;
  private _category: string;
  private _imageProductUrl: string;
  private _quantity: number = 0;
  private _totalProduct: number = 0;

  constructor(
    nameProduct: string,
    price: number,
    category: string,
    imageProductUrl: string
  ) {
    this._nameProduct = nameProduct;
    this._price = price;
    this._category = category;
    this._imageProductUrl = imageProductUrl;
  }

  toHenderHTML() {
    const ul = document.querySelector(".container-product");
    // const ul = document.getElementById("product-list");

    if (!ul) return;

    const li = document.createElement("li");
    li.className = "card-product";
    li.id = this._id

    const henderListProduct = `
          
            <div class="container-img">
              <img class="img-product"  src=${this._imageProductUrl} alt="Image of product">
              <button id="button-add-to-cart">
                <img src="assets/images/icon-add-to-cart.svg"></img>
                Add to Cart
              </button>
            </div>
            <div class="container-description-product">
              <h5 class="product-type-category">${this._category}</h5>
              <h4 class="product-name">${this._nameProduct}</h4>
              <p class="product-price">&dollar;${this._price}</p>
            </div>
      <div class="btn-selected" id="button-add-to-cart">
        <div class="w-3 h-3 btnDecrement"><img  src="assets/images/icon-decrement-quantity.svg"></img></div>
        <span>${this._quantity}</span>
        <div class="w-3 h-3 btnIncrement"><img  src="assets/images/icon-increment-quantity.svg"></img></div>
      </div>
        `;
    
    li.innerHTML = henderListProduct;
    const btnSelected = `
      <button id="button-add-to-cart">
        <img class="btnDecrement" src="assets/images/icon-decrement-quantity.svg"></img>
        <span>${this._quantity}</span>
        <img class="btnIncrement" src="assets/images/icon-increment-quantity.svg"></img>
      </button>
    `
    li.querySelector("#button-add-to-cart")?.addEventListener("click", () =>
      this.incrementQuantity()
    );
    ul?.appendChild(li);
  }

  updateTotal() {
    this._totalProduct = this._price * this._quantity;
  }

  incrementQuantity() {
    this._quantity += 1;
    this.updateTotal();

    ShoppingCart.addCart(this);    
  }
  dencrementQuantity() {
    this._quantity -= 1;
    this.updateTotal();
  }

  get getId() {
    return this._id;
  }

  get getTotal() {
    return this._totalProduct;
  }

  get getQuantity() {
    return this._quantity;
  }

  get getNameProduct() {
    return this._nameProduct;
  }
  get getPrice() {
    return this._price;
  }
  get getImage() {
    return this._imageProductUrl;
  }
}
