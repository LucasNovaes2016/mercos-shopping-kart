import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
        </div>
      </Router>
    </>
  );
}

export default App;
