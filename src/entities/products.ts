import { v4 as uuidv4 } from "uuid";
import { ShoppingCart } from "./shoppingCart";

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
    li.id = this._id;

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
        `;

    li.innerHTML = henderListProduct;

    li.querySelector("#button-add-to-cart")?.addEventListener("click", (e) => {
      this.incrementQuantity();

      const btn = e.currentTarget as HTMLButtonElement;
      const imgProduct = btn?.previousElementSibling as HTMLImageElement;

      if (this._quantity <= 0) {
        this.resetButton(btn, imgProduct);
      } else if (this._quantity >= 1) {
        btn.innerHTML = `
        <img class="btnDecrement" src="assets/images/icon-decrement-quantity.svg"></img>
        <span>${this._quantity}</span>
        <img class="btnIncrement" src="assets/images/icon-increment-quantity.svg"></img>
        `;
        btn.classList.add("btn-selected");

        //Seleciona a imagem para efeito selected e colocar borda
        if (!imgProduct) return;
        // imgProduct.classList.add(".img-product-selected");
        imgProduct.style.border = "3px solid hsl(14, 86%, 42%)";

        // Selecionando as imagens do botão "-" e "+"
        const imgDecrement = btn.querySelector(".btnDecrement");
        const imgIncrement = btn.querySelector(".btnIncrement");

        // Adicionando evento de clique na imagem de decremento
        imgDecrement?.addEventListener("click", (e) => {
          this.dencrementQuantity(); // Chama função para decrementar a quantidade
          e.stopPropagation(); // Prevenir que o clique no botão seja ativado
          const span = btn.querySelector("span");
          if (span) {
            span.textContent = `${this._quantity}`;
          }
          if (this._quantity <= 0) {
            this.resetButton(btn, imgProduct);
          }
        });

        // Adicionando evento de clique na imagem de incremento
        imgIncrement?.addEventListener("click", (e) => {
          this.incrementQuantity(); // Chama função para incrementar a quantidade
          e.stopPropagation(); // Prevenir que o clique no botão seja ativado
          const span = btn.querySelector("span");
          if (span) {
            span.textContent = `${this._quantity}`;
          }
        });
      }

      /* //Reseta butão ao excluir todos os itens no carrinho
      ShoppingCart.products.findIndex((product) => {
        const btn = document.querySelector("#button-add-to-cart") as HTMLButtonElement;
        const imgProduct = btn?.previousElementSibling as HTMLImageElement;
        console.log(product._id);
        console.log(ShoppingCart.products);
        //Verifica se existe o produto no carrinho
        const existingProduct = ShoppingCart.products.indexOf(product)
        console.log(existingProduct);
        
        //Se não existe, reseta butão
      });
    });
    ul?.appendChild(li);

  }

  resetButton(btn: HTMLButtonElement, imgProduct: HTMLImageElement) {
    btn.innerHTML = `
      <img src="assets/images/icon-add-to-cart.svg"></img>
      Add to Cart
    `;
    btn.classList.remove("btn-selected");
    // imgProduct.classList.remove("img-product-selected");
    imgProduct.style.border = "none";
    ShoppingCart.removeProductCart(this);
  }

  deleteProduct(){
    const btn = document.querySelector("#button-add-to-cart") as HTMLButtonElement;
    const imgProduct = btn?.previousElementSibling as HTMLImageElement;
    
    this.resetButton(btn,imgProduct)
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

    ShoppingCart.addCart(this);
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
