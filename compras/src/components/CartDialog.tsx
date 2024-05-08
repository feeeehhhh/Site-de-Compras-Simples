import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Product } from "../App";
import "../styles/Cart.scss";
import "../styles/carItems.scss";

interface CartDialogProps {
  open: boolean;
  onClose: () => void;
  carItems: Product[];
}

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  photo: string;
}

const CartDialog: React.FC<CartDialogProps> = ({ open, onClose, carItems }) => {
  
  const countItems = (items: Product[], itemId: number) => {
    return items.filter((item) => item.id === itemId).length;
  };

  
  const renderCartItems = () => {
    const uniqueItems = Array.from(new Set(carItems.map((item) => item.id)));
    return uniqueItems.map((itemId) => {
      const item = carItems.find((item) => item.id === itemId)!;
      const itemCount = countItems(carItems, itemId);
      return (
        <div key={itemId} className="car-items">
          <img src={item.photo} alt="" className="" />
          <div className="information">
            <p>{item.name}</p>
            <p className="price">R$ {item.price}</p>
            <p>Quantidade: {itemCount}</p>
          </div>
        </div>
      );
    });
  };
  let total = 0;

  
  const itemQuantities: { [key: number]: number } = {};

  
  for (let i = 0; i < carItems.length; i++) {
    const item = carItems[i];
    if (itemQuantities[item.id]) {
      itemQuantities[item.id] += 1;
    } else {
      itemQuantities[item.id] = 1;
    }
  }

  
  for (const itemId in itemQuantities) {
    if (Object.prototype.hasOwnProperty.call(itemQuantities, itemId)) {
      const item = carItems.find((item) => item.id === parseInt(itemId, 10))!;
      const itemTotal = item.price * itemQuantities[itemId]; // Multiplicamos o preço pelo quantidade total do item
      total += itemTotal;
    }
  }
  return (
    <Dialog
      fullScreen
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      open={open}
      onClose={onClose}
      className="contain-dialog"
      PaperProps={{ style: { backgroundColor: "white" } }}
    >
      <div className="dialog-c">
        <div className="header-cart">
          <DialogTitle id="dialog-title">Carrinho de compras</DialogTitle>
          <DialogActions>
            <Button className="x" onClick={onClose}>
              X
            </Button>
          </DialogActions>
        </div>

        <DialogContent>
          <DialogContentText id="dialog-description">
            <div className="items">{renderCartItems()}</div>
          </DialogContentText>
          <DialogContentText>
            <h1 className="total">Total a pagar: <span className="green">R$ {total.toFixed(2)}</span></h1>
          </DialogContentText>
        </DialogContent>
        <DialogActions autoFocus id="dia">
          <a className="finaliza-b" href="#">
            Finalizar Compra
          </a>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default CartDialog;
