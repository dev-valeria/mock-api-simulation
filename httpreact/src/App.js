import './App.css';
import { useState } from 'react';

// 4 Custom rook 
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom 
  const { data: items, httpConfig, loading } = useFetch(url); 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  // Add product

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    // 5 refatorando post

    httpConfig(product, "POST");
    setName("");
    setPrice("")

  }
  return (
    <div className="App">
      <h1>Product List</h1>
      {loading && <p>Carregando dados...</p>}
      {loading && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name || "No name"} - R$ {product.price || "Price not available"}
          </li>
        ))}
      </ul>
      )}
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



