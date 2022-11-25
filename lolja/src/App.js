
import { useEffect, useState } from 'react';
import styled from "styled-components";
import Cart from "./cart.js";
import Products from "./products.js";
/**
  *@param {string} url caminho da função
  *@param {string} method método do função
  *@returns objt de resposta
*/


async function api(url, method, body= undefined) {
  return await fetch(`http://localhost:4000${url}`, {
  body: body !== undefined ? JSON.stringify (body) : body,
  method: method,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}).then((res) =>res.json());
}

/**
 * @returns lista de produtos
 */



  async function apiGetProducts() {
    const data = await api("/products", "GET");
    return data.products;
  }
  
  /** 
  * @param {Object[]} products lista de produtos
  */

  async function apiSubmitCart(products) {
  await api("/purchases", "POST", { products });
  }

  function App() {
    const [productsLoading, setProductsLoading] = useState(false); // Status do loading de produtos
    const [products, setProducts] = useState([]); // Lista de produtos
    const [cart, setCart] = useState([]); // Lista de produtos no carrinho
    const [cartLoading, setCartLoading] = useState(false); // Status do loading do carrinho

    async function getProducts() {
        setProductsLoading(true); // Ativa loading de produtos
        setProducts(await apiGetProducts()); // Salva lista de produtos na variavel global
        setProductsLoading(false); // Desativa loading de produtos
    }
    
    async function submitCart() {
      setCartLoading(true); // Ativa loading do carrinho
      await apiSubmitCart(cart); // Salva o carrinho
      setCart([]); // Limpa o carrinho
      setCartLoading(false); // Desativa loading do carrinho

      getProducts(); // Busca os produtos novamente
    }

    function setProduct(product, change) {
      const products = cart.filter(({ id }) => {
      return id !== product.id;
      });
      
      product.units += change;
      if (product.units > 0) {
        setCart(() => [...products, product]);
      } 
      else {
        setCart(() => [...products]);
        setProducts((LastProducts) => [...LastProducts, product]);
      }
    }

      function addProduct (product) {
      product.units = 1;
      setCart(() => [...cart, product]);

      setProducts(() =>
        products.filter(({ id }) => {
        return id !== product.id;
      })
      );
    }

    useEffect(() =>{
      getProducts();
    }, []);

    const SMain = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
`;



    return(
      <SMain>
        <Cart products={cart}
          onChange={setProduct}
          onClick={submitCart}
          isLoading={cartLoading}
        />
        <Products
          products={products}
          onClick={addProduct}
          isLoading={productsLoading}
        />
      </SMain>
    );
  }

  export default App;