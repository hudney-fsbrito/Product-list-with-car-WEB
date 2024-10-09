# Product List with Cart (WEB)

Este projeto é uma aplicação web simples que exibe uma lista de produtos com funcionalidades de carrinho de compras.

Ele usa principalmente HTML, TypeScript e SCSS. A configuração do projeto inclui inicialização JavaScript, configuração Vite e configuração TypeScript. Ele também envolve a criação de uma classe de produto com atributos, bem como a estruturação de HTML/CSS para componentes de produto.

## Tecnologias Utilizadas

- **HTML**
- [**TypeScript**](https://www.npmjs.com/package/typescript)
- [**SCSS**](https://sass-lang.com/install/)
- [**Vite**](https://vitejs.dev/guide/#command-line-interface) - Utilizado para configuração e build do projeto.
- [**Tailwind Css**](https://tailwindcss.com/docs/guides/vite)
## Funcionalidades

- Listagem de produtos
- Adição e remoção de produtos no carrinho
- Exibição dinâmica do total de itens no carrinho
- Cálculo do valor total dos produtos

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/hudney-fsbrito/Product-list-with-car-WEB.git

   ```

2. Instalar as dependências:
   - npm install
   - npm init -y
   - npm install -D typescript
   - npm install ts-node -D
   - executar código no terminal: npx ts-node "./nome.ts"

- Para importar arquivos do json, descomenta a configuração dentro do arquivo tsconfig.json a seguir:

  ```json
  "resolveJsonModule": true,
  ```

3. Instalar o Sass:
   - npm install --save-dev sass
   - npm i -D sass (outra sintax)
4. Instalar Vite:
   - npm init -y
   - npm install -D vite

- No arquivo package.json, colocar dentro de "script" a dependência:

  ```json
  "dev" : "vite", // iniciar servidor de desenvolvimento, apelidos: `vite dev`, `vite serve`

  "build": "vite build", // construir para produção

  "preview": "vite preview", // visualizar localmente a versão de produção
  ```

- No arquivo HTML e na tag script colocar o atributo: type="module"

  ```html
  <script type="module" src="src/entities/products.ts"></script>
  ```

5. Iniciar o servidor de desenvolvimento:

   - npm run dev

6. Para a utilização de dados fictícios usa uma API chamada Faker:

   - npm install @faker-js/faker --save-dev

7. Para usar um id aleatório(gerador de id automático):
   - npm install uuid

- No arqivo a ser usado, fazer a importação

  ```ts
  import { v4 as uuidv4 } from "uuid"; // renomeio a função

  uuidv4(); // ⇨ gerará um id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  ```

8. Instalar o Tailwind CSS
   - npm install -D tailwindcss postcss autoprefixer
   - npx tailwindcss init -p

- Adicione os caminhos a todos os seus arquivos de modelo no arquivo tailwind.config.js:

  ```ts
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- Adicione as diretivas @tailwind para cada uma das camadas do Tailwind ao seu arquivo ./src/index.css :

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  ou para desaparecer o erro de Unknown at rule @tailwind no sass, basta substituir por:

  ```css
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
  ```

# 


   <ul>
      <li class="links"><a href="https://www.linkedin.com/in/hudneyfernandes-dev">LinkedIn</a></li>
      <li class="links"> <a href="https://github.com/hudney-fsbrito">Github</a></li>
   </ul>
