import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        console.log(data);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price) };
    console.log(newProduct)

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      setProducts([...products, newProduct]);
      setName("");
      setPrice("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name || "No name"} - R$ {product.price || "Price not available"}
          </li>
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}

export default App;



