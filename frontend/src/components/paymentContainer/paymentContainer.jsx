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

    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("hello2")
    setModal(!modal)
    console.log("test67",modal)
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
          <div title="Add the mortgage you need to pay">?</div>

          <input
            type="number"
            min="1"
            name="mortgage"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="rowGroup">
          <label className="InterestRate">Interest Rate</label>
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
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5">5 Years</option>
            <option value="6">6 Years</option>
            <option value="7">7 Years</option>
            <option value="8">8 Years</option>
            <option value="9">9 Years</option>
            <option value="10">10 Years</option>
            <option value="11">11 Years</option>
            <option value="12">12 Years</option>
            <option value="13">13 Years</option>
            <option value="14">14 Years</option>
            <option value="15">15 Years</option>
            <option value="16">16 Years</option>
            <option value="17">17 Years</option>
            <option value="18">18 Years</option>
            <option value="19">19 Years</option>
            <option value="20">20 Years</option>
          </select>{" "}
        </div>
        {/* <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Calculate
      </button> */}

        <button className="submitButton" type="submit" value="Calculate" onClick={toggleModal}>
          Submit
        </button>
      </form>
      <Summary details={details} modal={modal} toggleModal= {toggleModal}/>
    </div>
  );
}

export default PaymentContainer;
