import React from 'react';
import Button from '@mui/material/Button';
import car from '../assets/carrinho.svg';

import '../styles/Cart.scss'
interface CartButtonProps {
  onClick: () => void;
  carItems: Product[];
}

const CartButton: React.FC<CartButtonProps> = ({ onClick, carItems }) => {
  return (
    <Button onClick={onClick} className="dialog-b">
      <div className="compras">
        <img src={car} alt="Compras" />
        <p>{carItems.length}</p>
      </div>
    </Button>
    
  );
  
};

export default CartButton;