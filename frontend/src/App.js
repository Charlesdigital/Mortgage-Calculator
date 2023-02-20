import React from "react";
import "./App.css";
import PaymentContainer from "./components/paymentContainer/paymentContainer.jsx";
import house from "./assets/house.svg"

function App() {
  return (
    <div className="App">
      <img className="house" src = {house} alt="Home" />
      <PaymentContainer />
    </div>
  );
}

export default App;
