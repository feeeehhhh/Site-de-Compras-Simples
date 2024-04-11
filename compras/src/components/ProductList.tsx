import React from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  produtos: Product[];
  handleAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ produtos, handleAddToCart }) => {
  return (
    <div className="product-list">
      {produtos.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;