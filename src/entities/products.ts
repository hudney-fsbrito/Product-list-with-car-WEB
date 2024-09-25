import { v4 as uuidv4 } from "uuid";

export class Product {
  [x: string]: any;
  private _id: string = uuidv4();
  private _nameProduct: string;
  private _price: number;
  private _category: string;
  private _imageProductUrl: string;

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

  get getNameProduct() {
    return this._nameProduct;
  }
  get getPrice() {
    return this._price;
  }

  toHender() {
    const productPage = document.querySelector(".product-page");

    const ul = document.createElement("ul");
    ul.className = "container-product";

    const henderListProduct = `
          <li class="card-product">
            <div class="container-img">
              <img class="img-product"  src=${this._imageProductUrl} alt="Image of product">
              <button>
                <img src="assets/images/icon-add-to-cart.svg"></img>
                Add to Cart
              </button>
            </div>
            <div class="container-description-product">
              <h5 class="product-type-category">${this._category}</h5>
              <h4 class="product-name">${this._nameProduct}</h4>
              <p class="product-price">&dollar;${this._price}</p>
            </div>
          </li>             
        `;
    ul.innerHTML = henderListProduct;
    productPage?.appendChild(ul);

    console.log(ul);
    console.log(productPage);
    
  }
}
