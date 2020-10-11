import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <h1> Hello World from container </h1>
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
