import React, { useEffect, useState } from "react";

// Import custom components
import ProductCard from './components/ProductCard';
import CartDialog from './components/CartDialog';
import ProductList from './components/ProductList';
import CartButton from "./components/CartButton.tsx";


import "./styles/style.scss";


// Interface for a Product object
interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

// Main App component
function App() {
  // State for storing products fetched from the API
  const [produtos, setProdutos] = useState<Product[]>([]);

  // State for controlling the visibility of the cart dialog
  const [open, setOpen] = useState(false);

  // State for storing items in the cart
  const [carItems, setCarItems] = useState<Product[]>([]);

  // Fetch products from the API on component mount
  useEffect(() => {
    fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC"
    )
    .then((response) => response.json())
    .then((data) => {
        setProdutos(data.products);
      });
  }, []);

  // Function to add a product to the cart
  const handleAddToCart = (product: Product) => {
    setCarItems((prevCartItems) => [...prevCartItems, product]);
  };

  // Render the App component
  return (
    <main>
      <nav className="nav">
        <div className="logo">
          <h1 className="mks">MKS</h1>
          <h1 className="sistemlogo">Sistemas</h1>
        </div>
        <div className="compras">
          {/* Render the CartButton component */}
          <CartButton onClick={() => setOpen(true)} carItems={carItems} />
          {/* Render the CartDialog component */}
          <CartDialog open={open} onClose={() => setOpen(false)} carItems={carItems} />
        </div>
      </nav>
      <section className="container-geral">
        {/* Render the ProductList component */}
        <ProductList produtos={produtos} handleAddToCart={handleAddToCart} />
      </section>
    </main>
  );
}

// Export the App component
export default App;