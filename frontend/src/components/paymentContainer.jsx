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

    // const {mortgageValue, interestRateValue, amortizationPeriodValue} = e.target.value

    const name = e.target.name;
    const value = e.target.value;

    // const mortgageValue = e.target.value.mortgageValue;
    // const interestRateValue = e.target.value.interestRateValue;
    // const amortizationPeriodValue = e.target.value.amortizationPeriodValue;
    console.log("af234234234", name, value);


    // console.log(mortgageValue, interestRateValue, amortizationPeriodValue);
// console.log(mortgageValue)
    setDetails((prev) => {
        return {...prev,
            [name]: value,

            // [details.paymentFrequency]: mortgageValue
            // [details.term]: mortgageValue

        }
    })
  };

//   console.log("after", details);

  const handleSubmit = () => {
    console.log("after2", details)
  }

  //things to do:\
  //add down payment
  //1. Terms
  //2. Amortization Period
  //3. Mortgage Payment
  //4 PrePayment

  return (
    <div>
      <h1> Payment Plan</h1>
      <div className="rowGroup">
        <label className="MortgageAmount">Mortgage Amount</label>
        <span className="icon">$</span>
        <input type="text" name="mortgage" onChange={handleChange}></input>
      </div>
      <div className="rowGroup">
        <label className="InterestRate"></label>
        <span className="icon">%</span>
        <input
          type="number"
          max="100"
          name="interestRate"
          onChange={handleChange}
        ></input>
      </div>
      <div className="rowGroup">
        <label className="AmortizationPeriod">Amortization Period</label>
        <input
          type="number"
          name="amortizationPeriod"
          onChange={handleChange}
        ></input>
      </div>
      <div className="rowGroup">
        <label className="paymentFrequency">Payment Frequency</label>
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
      <button
        onClick={() => {
            handleSubmit();
        }}
      >
        Calculate
      </button>
    </div>
  );
}

export default PaymentContainer;
