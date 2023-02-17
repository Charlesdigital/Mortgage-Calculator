import { useState } from "react";
import Summary from "../summary/summary.jsx";
import "./paymentContainer.css";


function PaymentContainer() {
  const [details, setDetails] = useState({
    mortgage: "",
    interestRate: "",
    amortizationPeriod: "",
    paymentFrequency: "",
    term: "",
  });

    // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal)
  // }

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
    //to avoid rerendering the whole page
    e.preventDefault();
    // console.log("after2", details);
  };
  console.log("test1", details.mortgage);

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
          <input
            type="number"
            min="1"
            name="mortgage"
            onChange={handleChange}
            required
          ></input>
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
          <select name="paymentFrequency" min="1" onChange={handleChange}>
            <option value="0"></option>
            <option value="52">Weekly</option>
            <option value="26">Bi-weekly</option>
            <option value="12">Monthly</option>
          </select>
        </div>
        <div className="rowGroup">
          <label className="Term">Term</label>
          <select name="term" onChange={handleChange}>
            <option value="0"></option>
            <option value="1 ">1 Year</option>
            <option value="2">2 Year</option>
            <option value="3">3 Year</option>
            <option value="4">4 Year</option>
            <option value="5">5 Year</option>
            <option value="6">6 Year</option>
            <option value="7">7 Year</option>
            <option value="8">8 Year</option>
            <option value="9">9 Year</option>
            <option value="10">10 Year</option>
          </select>{" "}
        </div>
        {/* <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Calculate
      </button> */}

        <input className="submitButton" type="submit" value="Calculate" />
      </form>
      <Summary details={details} />
    </div>
  );
}

export default PaymentContainer;
