import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, qty }) => sum + price * qty,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).qty = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  const productStyle = {
    width:"60%"
  }

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products" style={productStyle}>
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Price: ${product.price}</h4>
            <h4>Quantity: 
            <input
              value={product.qty}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            </h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
