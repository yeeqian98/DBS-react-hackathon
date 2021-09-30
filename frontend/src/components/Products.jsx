import React, { useState } from 'react';

const ELECTRONICS = 'Electronics';
const JEWELERY = 'Jewelery';
const MENCLOTHING = 'Men Clothing';
const WOMENCLOTHING = 'Women Clothing';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      id: 9,
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0' ,
      price: 64,
      description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
      category: ELECTRONICS,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      qty: 50
  },
  {
      id: 10,
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: 109,
      description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5 hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
      category: ELECTRONICS,
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      qty: 50
  },

  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.qty++;
    } else {
      itemInCart = {
        ...product,
        qty: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(ELECTRONICS);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  const productStyle = {
    width:"50%"
  }

  return (
    <>
      <h1>Products</h1>
      Select a category <br></br>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={ELECTRONICS}>{ELECTRONICS}</option>
        <option value={JEWELERY}>{JEWELERY}</option>
        <option value={MENCLOTHING}>{MENCLOTHING}</option>
        <option value={WOMENCLOTHING}>{WOMENCLOTHING}</option>
      </select>
      <div className="products" style={productStyle}>
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.title}</h3>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
            <h4>Quantity: {product.qty}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
