import React from 'react';
import { Product } from '../App';

import '../styles/Products.scss'
import buy from '../assets/buy.svg'

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.photo} alt={product.name} />
      <div className="product-info">
        <div className='titleANDprice'>
          <h3 >{product.name}</h3>
          <p>R${product.price}</p>
        </div>
        <p className='description'>{product.brand}</p>
        <p className='description'>{product.description}</p>
        <a className='button-purchase' id='my-button'  onClick={() => handleAddToCart(product)}>
          <img src={buy} alt="Buy" />
          Adicionar ao carrinho
          </a>
      </div>
    </div>
  );
};

export default ProductCard;