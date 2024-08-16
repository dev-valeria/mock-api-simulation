import './App.css';
import { useState } from 'react';

// 4 Custom rook 
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom 
  const { data: items } = useFetch(url); 
  console.log(items)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price) };

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      // 3 - Carregamento dinamico

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
        {items && items.map((product) => (
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



