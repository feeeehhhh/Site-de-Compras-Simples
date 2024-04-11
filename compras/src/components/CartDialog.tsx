import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Product } from "../App";
import "../styles/Cart.scss";

interface CartDialogProps {
  open: boolean;
  onClose: () => void;
  carItems: Product[];
}

const CartDialog: React.FC<CartDialogProps> = ({ open, onClose, carItems }) => {
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
            <Button className="x" onClick={onClose}>X</Button>
          </DialogActions>
        </div>

        <DialogContent>
          <DialogContentText id="dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vel officia quam iste ipsum consequatur distinctio itaque vero!
            Dolores, laborum.
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
