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

  static toHenderCart() {
    //Seleciona a div do carrinho de compras
    const divCar = document.getElementById("cartShopping");

    if (!divCar) return;

    //Atualiza o total de produtos selecionados
    const quantityTotalHTML = divCar.firstElementChild?.firstElementChild;

    if (!quantityTotalHTML) return;

    quantityTotalHTML.innerHTML = this._quantityCart.toString();

    //Atualiza e add lista de produtos no html do carrinho
    const ulCartList = divCar.querySelector("ul");
    if (!ulCartList) return;
    ulCartList.innerHTML = "";
    
    this._products.forEach((product) => {
      const liHTML = document.createElement("li");
      liHTML.className = "product-item";
      liHTML.innerHTML = `
      <div class="product-item-info">
        <h4 class="product-name-cart">${product.getNameProduct}</h4>
        <div class="product-item-prices">
          <p class="quantity-product">${product.getQuantity}x</p>
          <p class="product-price">&dollar;${product.getPrice}</p>
          <p class="total-product-price">&dollar;${product.getTotal}</p>
        </div>
      </div>
      <div>
        <img class="icon-remove-item cursor-pointer" src="assets/images/icon-remove-item.svg" alt="Ícone para excluir item">
      </div>
      `;
      ulCartList?.appendChild(liHTML);
    });

    //Inicia o html do carrinho e atualiza preço total do carrinho
    if (this._products.length >= 1) {

      const divOrderTotal = divCar.querySelector(".order-total");
      
      if (!divOrderTotal) return;
      
      const empty = document.getElementById("empty");
      if(!empty) return;
      empty.style.display = 'none'

      divOrderTotal.innerHTML = `  
      <p>Order Total</p>
      <p class="total-cart">$${this._totalPrice}</p>
      `;
      
      const btnOrderTotal = divCar.querySelector(".btn");
      
      if (!btnOrderTotal) return;
      
      btnOrderTotal.innerHTML = `
        
      <button class="btn-delivery">
        <img src="assets/images/icon-carbon-neutral.svg" alt="">
        This is a <span>carbon-neutral</span> delivery
      </button>
      <button class="btn-confirm-order">Confirm Order</button>
        
      `
      //Abre modal ao clicar no botão confirm
      const btnConfirm = document.querySelector(".btn-confirm-order");
      const modal = document.getElementById("modal");
      if(!modal) return;
      btnConfirm?.addEventListener("click", () => {
        if(modal !== null) {
          return modal.style.display = "flex"
        }
      })
      
      //Mostra produtos no modal de finalização de compra
      const ulListModal = modal?.querySelector('ul');
      if (!ulListModal) return;
      ulListModal.innerHTML = ""
      this._products.forEach(product => {
        const liModal = document.createElement('li')
        liModal.className = "product-item"
        liModal.innerHTML = `

          <div class="product-item-left">
            <div class="container-img-order-confirmed">
              <img class="img-product-order-confirmed"  src=${product.getImage} alt="Image of product">
            </div>
            <div class="product-item-info">
              <h4 class="product-name-cart">${product.getNameProduct}</h4>
              <div class="product-item-prices">
                <p class="quantity-product">${product.getQuantity}x</p>
                <p class="product-price">$${product.getPrice}</p>
              </div>
            </div>

          </div>
          <p class="total-product-price">&dollar;${product.getTotal}</p>

        `
        ulListModal.appendChild(liModal)
      });
      const orderTotalModal = modal?.querySelector(".order-total")
      if(!orderTotalModal)return;

      orderTotalModal.innerHTML = `

      <p>Order Total</p>
      <p class="total-cart">&dollar;${this._totalPrice}</p>

      `
      //Fecha modal
      const closeModal = modal?.querySelector(".close")
      closeModal?.addEventListener("click", () => {
        modal.style.display = "none"
      })
    } 
  }

  static addCart(product: Product) {
    // const existingProduct = this.products.find(cartProduct => cartProduct.getId === product.getId);

    //Verifica se existe o produto no carrinho
    const existingProduct = this.products.includes(product);

    //Se não existe, add produto
    if (!existingProduct) {
      this._products.push(product);
    }

    //Atualiza o preço e o total de produtos
    this.calculateQuantity();

    //Atualiza o html do carrinho
    this.toHenderCart();
  }
  
  static removeProductCart(product: Product) {
    // this._products = this._products.findIndex((item)=> item.getId === product.getId);
    this._products = this._products.filter(
      (item) => item.getId !== product.getId
    );
    
    this.calculateQuantity();
    this.toHenderCart();
  }

  static orderConrfirm() {
    const orderConfirm = document.querySelector("")
  }

  static get products() {
    return this._products;
  }
}
