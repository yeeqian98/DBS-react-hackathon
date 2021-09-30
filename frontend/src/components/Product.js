import React, { useState } from 'react';
import '../App.css';
import Cart from './Cart';
import Products from './Products';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Product() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
  
    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };
  
    const getCartTotal = () => {
      return cart.reduce(
        (sum, { qty }) => sum + qty,
        0
      );
    };

    return (
        <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
    )
}
export default Product;

