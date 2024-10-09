(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const P=[{image:{thumbnail:"./assets/images/image-waffle-thumbnail.jpg",mobile:"./assets/images/image-waffle-mobile.jpg",tablet:"./assets/images/image-waffle-tablet.jpg",desktop:"./assets/images/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{image:{thumbnail:"./assets/images/image-creme-brulee-thumbnail.jpg",mobile:"./assets/images/image-creme-brulee-mobile.jpg",tablet:"./assets/images/image-creme-brulee-tablet.jpg",desktop:"./assets/images/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{image:{thumbnail:"./assets/images/image-macaron-thumbnail.jpg",mobile:"./assets/images/image-macaron-mobile.jpg",tablet:"./assets/images/image-macaron-tablet.jpg",desktop:"./assets/images/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{image:{thumbnail:"./assets/images/image-tiramisu-thumbnail.jpg",mobile:"./assets/images/image-tiramisu-mobile.jpg",tablet:"./assets/images/image-tiramisu-tablet.jpg",desktop:"./assets/images/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{image:{thumbnail:"./assets/images/image-baklava-thumbnail.jpg",mobile:"./assets/images/image-baklava-mobile.jpg",tablet:"./assets/images/image-baklava-tablet.jpg",desktop:"./assets/images/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{image:{thumbnail:"./assets/images/image-meringue-thumbnail.jpg",mobile:"./assets/images/image-meringue-mobile.jpg",tablet:"./assets/images/image-meringue-tablet.jpg",desktop:"./assets/images/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{image:{thumbnail:"./assets/images/image-cake-thumbnail.jpg",mobile:"./assets/images/image-cake-mobile.jpg",tablet:"./assets/images/image-cake-tablet.jpg",desktop:"./assets/images/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{image:{thumbnail:"./assets/images/image-brownie-thumbnail.jpg",mobile:"./assets/images/image-brownie-mobile.jpg",tablet:"./assets/images/image-brownie-tablet.jpg",desktop:"./assets/images/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{image:{thumbnail:"./assets/images/image-panna-cotta-thumbnail.jpg",mobile:"./assets/images/image-panna-cotta-mobile.jpg",tablet:"./assets/images/image-panna-cotta-tablet.jpg",desktop:"./assets/images/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}];var c=[];for(var v=0;v<256;++v)c.push((v+256).toString(16).slice(1));function q(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}var h,j=new Uint8Array(16);function T(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(j)}var k=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const _={randomUUID:k};function L(e,t,r){if(_.randomUUID&&!t&&!e)return _.randomUUID();e=e||{};var n=e.random||(e.rng||T)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,q(n)}const y=class y{static calculateQuantity(){this._totalPrice=0,this._quantityCart=0,this.products.forEach(t=>{this._totalPrice+=t.getTotal,this._quantityCart+=t.getQuantity})}static toHenderCart(){var s;const t=document.getElementById("cartShopping");if(!t)return;const r=(s=t.firstElementChild)==null?void 0:s.firstElementChild;if(!r)return;r.innerHTML=this._quantityCart.toString();const n=t.querySelector("ul");if(n){if(n.innerHTML="",this._products.forEach(a=>{const i=document.createElement("li");i.className="product-item",i.innerHTML=`
      <div class="product-item-info">
        <h4 class="product-name-cart">${a.getNameProduct}</h4>
        <div class="product-item-prices">
          <p class="quantity-product">${a.getQuantity}x</p>
          <p class="product-price">&dollar;${a.getPrice}</p>
          <p class="total-product-price">&dollar;${a.getTotal}</p>
        </div>
      </div>
      <div>
        <img class="icon-remove-item cursor-pointer" src="assets/images/icon-remove-item.svg" alt="Ícone para excluir item">
      </div>
      `;const l=i.querySelector(".icon-remove-item");l==null||l.addEventListener("click",()=>{this.removeProductCart(a)}),n==null||n.appendChild(i)}),this._products.length>=1){const a=t.querySelector(".order-total");if(a.style.display="flex",!a)return;const i=document.getElementById("empty");if(!i)return;i.style.display="none",a.innerHTML=`  
      <p>Order Total</p>
      <p class="total-cart">$${this._totalPrice}</p>
      `;const l=t.querySelector(".btn");if(l.style.display="block",!l)return;l.innerHTML=`
        
      <button class="btn-delivery">
        <img src="assets/images/icon-carbon-neutral.svg" alt="">
        This is a <span>carbon-neutral</span> delivery
      </button>
      <button class="btn-confirm-order">Confirm Order</button>
        
      `;const d=document.querySelector(".btn-confirm-order"),o=document.getElementById("modal");if(!o)return;d==null||d.addEventListener("click",()=>{if(o!==null)return o.style.display="flex"});const u=o==null?void 0:o.querySelector("ul");if(!u)return;u.innerHTML="",this._products.forEach(g=>{const f=document.createElement("li");f.className="product-item",f.innerHTML=`

          <div class="product-item-left">
            <div class="container-img-order-confirmed">
              <img class="img-product-order-confirmed"  src=${g.getImage} alt="Image of product">
            </div>
            <div class="product-item-info">
              <h4 class="product-name-cart">${g.getNameProduct}</h4>
              <div class="product-item-prices">
                <p class="quantity-product">${g.getQuantity}x</p>
                <p class="product-price">$${g.getPrice}</p>
              </div>
            </div>

          </div>
          <p class="total-product-price">&dollar;${g.getTotal}</p>

        `,u.appendChild(f)});const m=o==null?void 0:o.querySelector(".order-total");if(!m)return;m.innerHTML=`

      <p>Order Total</p>
      <p class="total-cart">&dollar;${this._totalPrice}</p>

      `;const b=o==null?void 0:o.querySelector(".close");b==null||b.addEventListener("click",()=>{o.style.display="none"})}else if(this._products.length===0){const a=document.getElementById("empty");if(!a)return;a.style.display="flex";const i=t.querySelector(".btn");if(!i)return;i.style.display="none";const l=t.querySelector(".order-total");if(!l)return;l.style.display="none"}}}static addCart(t){this.products.includes(t)||this._products.push(t),this.calculateQuantity(),this.toHenderCart()}static removeProductCart(t){this._products=this._products.filter(r=>r.getId!==t.getId),this.calculateQuantity(),this.toHenderCart(),t.deleteProduct()}static orderConrfirm(){document.querySelector("")}static get products(){return this._products}};y._products=[],y._totalPrice=0,y._quantityCart=0;let p=y;class C{constructor(t,r,n,s){this._id=L(),this._quantity=0,this._totalProduct=0,this._nameProduct=t,this._price=r,this._category=n,this._imageProductUrl=s}toHenderHTML(){var s;const t=document.querySelector(".container-product");if(!t)return;const r=document.createElement("li");r.className="card-product",r.id=this._id;const n=`
          
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
        `;r.innerHTML=n,(s=r.querySelector("#button-add-to-cart"))==null||s.addEventListener("click",a=>{this.incrementQuantity();const i=a.currentTarget,l=i==null?void 0:i.previousElementSibling;if(this._quantity<=0)this.resetButton(i,l);else if(this._quantity>=1){if(i.innerHTML=`
        <img class="btnDecrement" src="assets/images/icon-decrement-quantity.svg"></img>
        <span>${this._quantity}</span>
        <img class="btnIncrement" src="assets/images/icon-increment-quantity.svg"></img>
        `,i.classList.add("btn-selected"),!l)return;l.style.border="3px solid hsl(14, 86%, 42%)";const d=i.querySelector(".btnDecrement"),o=i.querySelector(".btnIncrement");d==null||d.addEventListener("click",u=>{this.dencrementQuantity(),u.stopPropagation();const m=i.querySelector("span");m&&(m.textContent=`${this._quantity}`),this._quantity<=0&&this.resetButton(i,l)}),o==null||o.addEventListener("click",u=>{this.incrementQuantity(),u.stopPropagation();const m=i.querySelector("span");m&&(m.textContent=`${this._quantity}`)})}}),t==null||t.appendChild(r)}resetButton(t,r){this._quantity=0,t.innerHTML=`
      <img src="assets/images/icon-add-to-cart.svg"></img>
      Add to Cart
    `,t.classList.remove("btn-selected"),r.style.border="none",p.removeProductCart(this)}deleteProduct(){const t=document.getElementById(this.getId);if(t){const r=t.querySelector("#button-add-to-cart"),n=t.querySelector(".img-product");r&&n&&this.resetButton(r,n)}}updateTotal(){this._totalProduct=this._price*this._quantity}incrementQuantity(){this._quantity+=1,this.updateTotal(),p.addCart(this)}dencrementQuantity(){this._quantity-=1,this.updateTotal(),p.addCart(this)}get getId(){return this._id}get getTotal(){return this._totalProduct}get getQuantity(){return this._quantity}get getNameProduct(){return this._nameProduct}get getPrice(){return this._price}get getImage(){return this._imageProductUrl}}const E=()=>{P.map(e=>{new C(e.name,e.price,e.category,e.image.desktop).toHenderHTML()})};E();
