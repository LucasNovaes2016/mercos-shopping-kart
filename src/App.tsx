import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, SalesInfo } from "./components";
import axios from "axios";
import {
  delivery_info_default,
  desconto_info_default,
  pagamento_info_default,
} from "./core/data/local";

axios
  .get("https://5f2c373bffc88500167b8cce.mockapi.io/carrinho")
  .then((response) => {
    console.log(" response.data = ", response.data);
  })
  .catch((error) => {
    console.log(" erro... = ", error);
  });

function App() {
  return (
    <>
      <Router>
        <Header />
        <SalesInfo
          delivery_info={delivery_info_default}
          pagamento_info={pagamento_info_default}
          desconto_info={desconto_info_default}
        />
        <ToastContainer
          autoClose={5000}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
      </Router>
    </>
  );
}

export default App;
