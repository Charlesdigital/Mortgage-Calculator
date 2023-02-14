import { useState } from "react";

function PaymentContainer() {
  //   const calculate = () => {
  // return 4
  // }
  // const [interest, setInterest] = useState(1);
  const [details, setDetails] = useState({
    mortgage: "",
    interestRate: "",
    amortizationPeriod: "",
    paymentFrequency: "",
    term: "",
  });

  function calculate() {
    // setInterest(7)
    return 1;
  }

  const handleChange = (e) => {
    //grab the name and input value
    const name = e.target.name;
    const value = e.target.value;

    console.log("af234234234", name, value);

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("after2", details);
  };
  console.log("test1",details.mortgage)

  //things to do:\
  //add down payment
  //1. Terms
  //2. Amortization Period
  //3. Mortgage Payment
  //4 PrePayment

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <h1> Payment Plan</h1>
      <div className="rowGroup">
        <label className="MortgageAmount">Mortgage Amount</label>
        <span className="icon">$</span>
        <input type="number" min="1" name="mortgage" onChange={handleChange} required></input>
      </div>
      <div className="rowGroup">
        <label className="InterestRate"></label>
        <span className="icon">%</span>
        <input
          type="number"
          max="100"
          name="interestRate"
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className="rowGroup">
        <label className="AmortizationPeriod">Amortization Period</label>
        <input
          type="number"
          name="amortizationPeriod"
          min="1"
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className="rowGroup">
        <label className="payFrequency">Payment Frequency</label>
        <select name="paymentFrequency" onChange={handleChange}>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="rowGroup">
        <label className="Term">Term</label>
        <select name="term" onChange={handleChange}>
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
      {/* <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Calculate
      </button> */}

      <input type="submit" value="Calculate" />

      </form>
    </div>
  );
}

export default PaymentContainer;
