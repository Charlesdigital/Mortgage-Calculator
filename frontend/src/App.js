import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
import PaymentContainer from "./components/paymentContainer/paymentContainer.jsx";
import Summary from "./components/summary/summary.jsx";
import house from "./assets/house.svg"

function App() {
  return (
    <div className="App">
      {/* <img className="Charles" src = {house} alt="Home" /> */}
      <img className="house" src = {house} alt="Home" />

      <PaymentContainer />
    </div>
  );
}

export default App;

// Mortgage Calculator

// Check your monthly payment with a Fixed Rate

// Value of the home

// Interest Rate

// Payment Frequency

// Term

// Downpayment

// Monthly Payments
