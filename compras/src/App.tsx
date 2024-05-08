import React, { useEffect, useState } from "react";

// Import custom components
import ProductCard from './components/ProductCard';
import CartDialog from './components/CartDialog';
import ProductList from './components/ProductList';
import CartButton from "./components/CartButton.tsx";


import "./styles/style.scss";



interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}


function App() {
  
  const [produtos, setProdutos] = useState<Product[]>([]);

  
  const [open, setOpen] = useState(false);

  
  const [carItems, setCarItems] = useState<Product[]>([]);

  
  useEffect(() => {
    fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC"
    )
    .then((response) => response.json())
    .then((data) => {
        setProdutos(data.products);
      });
  }, []);

  
  const handleAddToCart = (product: Product) => {
    setCarItems((prevCartItems) => [...prevCartItems, product]);
  };

  
  return (
    <main>
      <nav className="nav">
        <div className="logo">
          <h1 className="mks">Market</h1>
          <h1 className="sistemlogo">Tech</h1>
        </div>
        <div className="compras">
          
          <CartButton onClick={() => setOpen(true)} carItems={carItems} />
          <CartDialog open={open} onClose={() => setOpen(false)} carItems={carItems} />
        </div>
      </nav>
      <section className="container-geral">
        
        <ProductList produtos={produtos} handleAddToCart={handleAddToCart} />
      </section>
    </main>
  );
}


export default App;