import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, SalesInfo, Kart } from "./components";
import axios from "axios";
import {
  delivery_info_default,
  desconto_info_default,
  pagamento_info_default,
} from "./core/data/local";
import store from "../src/core/redux/store";
import { Provider } from "react-redux";

function App() {
  const [listaProdutos, setListaProdutos] = React.useState<any>([]);

  React.useEffect(() => {
    axios
      .get("https://5f2c373bffc88500167b8cce.mockapi.io/carrinho")
      .then((response) => {
        if (response && response.data) {
          if (response.data.length) {
            setListaProdutos(response.data);

            toast.success("Produto(s) carregados com sucesso.");
          } else {
            toast.warning("Não foi possível carregar lista de produtos.");
          }
        }
      })
      .catch((error) => {
        toast.warning("Erro ao carregar lista de produtos.");
      });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <SalesInfo
            delivery_info={delivery_info_default}
            pagamento_info={pagamento_info_default}
            desconto_info={desconto_info_default}
          />
          <Kart />

          <ToastContainer
            autoClose={5000}
            position={toast.POSITION.BOTTOM_RIGHT}
          />
        </Router>
      </Provider>
    </>
  );
}

export default App;
