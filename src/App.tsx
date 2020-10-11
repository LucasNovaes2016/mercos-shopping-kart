import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderInfo } from "./components";
import {
  numero_default,
  local_default,
  usuario_default,
} from "./core/data/local";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <HeaderInfo
            numero={numero_default}
            local={local_default}
            usuario={usuario_default}
          />
          <ToastContainer
            autoClose={5000}
            position={toast.POSITION.BOTTOM_RIGHT}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
