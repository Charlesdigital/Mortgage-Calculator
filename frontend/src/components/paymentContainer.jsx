import {useState} from "react";

function PaymentContainer() {

//   const calculate = () => {
// return 4
// }
// const [interest, setInterest] = useState(1);
const [details, setDetails ] = useState({
 mortgage: '',
 interestRate:'',
 amortizationPeriod:'',
 paymentFrequency:'',
 term: '',
});


function calculate() {
    // setInterest(7)
 return 1
}

const handleChange = (e) => {
    console.log(e.target.value)
    // const {mortgage, interestRate, amortizationPeriod, paymentFrequency, term} = e.target
    const mortgage = e.target.value.mortgage;
    const interestRate = e.target.interestRate;
    // const amortizationPeriod = e.target.amortizationPeriod;
    console.log(mortgage)


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
        <label className="MortgageAmount" >Mortgage Amount</label>
        <span className="icon">$</span>
        <input type="text"  name="mortgage" onChange={handleChange}></input>
      </div>
      <div className="rowGroup">
        <label className="InterestRate"></label>
        <span className="icon">%</span>
        <input type="text" name ="interestRate" onChange={handleChange}></input>
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
      <button onClick={() => {
{calculate()}}

        }>Calculate</button>
    </div>
  );
}

export default PaymentContainer;
