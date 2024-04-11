import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import "./components/Market.scss";

import "./style.scss";
import buy from "./assets/buy.svg";
import car from "./assets/carrinho.svg";
import './components/Market.scss'

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
          <h1 className="mks">MKS</h1>
          <h1 className="sistemlogo">Sistemas</h1>
        </div>
        <div className="compras">
          <Button onClick={() => setOpen(true)} className="dialog-b">
            <div className="compras">
              <img src={car} alt="Compras" />
              <p>{carItems.length}</p>
            </div>
          </Button>
          <Dialog
            fullScreen
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            open={open}
            onClose={() => setOpen(false)}
            className="teste"
            PaperProps={{ style: { backgroundColor: "white" } }}
          >
            
            <div className="dialog-c">
              <DialogTitle id="dialog-title">Carrinho de compras</DialogTitle>
              <DialogActions><Button onClick={() => setOpen(false)}>X</Button></DialogActions>
            
              <DialogContent>
                <DialogContentText id="dialog-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque vel officia quam iste ipsum consequatur distinctio
                  itaque vero! Dolores, laborum.
                </DialogContentText>
              </DialogContent>
              <DialogActions autoFocus id="dia">
                <a className="finaliza-b" href="#">Finalizar Compra</a>
              </DialogActions>
            </div>
          </Dialog>
        </div>
      </nav>
      <section className="container-geral">
        <ul className="groupcards">
          {produtos.map((i) => {
            return (
              <li key={i.id} className="card">
                <div className="information">
                  <img src={i.photo} alt={i.name} />
                  <div className="title-price">
                    <h3> {i.name}</h3>
                    <span>R${i.price}</span>
                  </div>
                  <p>{i.description}</p>
                </div>
                <div className="button">
                  <img src={buy} alt="buy" />
                  <a onClick={() => handleAddToCart(i)} href="#">
                    COMPRAR
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
