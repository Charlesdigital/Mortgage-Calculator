import React from "react";

function paymentContainer() {

  const calculate = () => {
    console.log("hello");
  }

  return (
    <div>
      <h1> Payment Plan</h1>
      <div className="rowGroup">
        <label className="MortgageAmount">Mortgage Amount</label>
        <span className="icon">$</span>
        <input type="text"></input>
      </div>
      <div className="rowGroup">
        <label className="InterestRate">Interest Rate</label>
        <span className="icon">%</span>
        <input type="text"></input>
      </div>
      <div className="rowGroup">
        <label className="AmortizationPeriod">Amortization Period</label>
        <input type="text"></input>
      </div>
      <div className="rowGroup">
        <label className="Payment Frequency">Payment Frequency</label>
        <select name="frequency">
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="rowGroup">
        <label className="Term">Term</label>
        <select name="Terms">
          <option value="1 Year">1 Year</option>
          <option value="2 Year">2 Year</option>
          <option value="3 Year">3 Year</option>
          <option value="4 Year">4 Year</option>
          <option value="5 Year">5 Year</option>
          <option value="6 Year">6 Year</option>
          <option value="7 Year">7 Year</option>
          <option value="8 Year">8 Year</option>
          <option value="9 Year">9 Year</option>
          <option value="10 Year">10 Year</option>
        </select>{" "}
      </div>
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default paymentContainer;
