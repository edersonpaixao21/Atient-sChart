import React from "react";
import Router from "./routes";
import { GlobalStyle } from "./styles/reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;
