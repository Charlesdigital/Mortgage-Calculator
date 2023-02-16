import React from "react";

function summary(props) {

    console.log("props", props)
    console.log("props2", props.details.mortgage)


    const {mortgage, interestRate, amortizationPeriod, paymentFrequency, term} = props.details;

    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].
    const rate = (interestRate/100)/paymentFrequency
    console.log("props6", rate)

    const mortgageTerm = mortgage*term
    console.log("props4", mortgageTerm)
    const payments = amortizationPeriod*paymentFrequency
    console.log("props5", payments)
    const amortizationPeriodPayments = amortizationPeriod*paymentFrequency


//parseInt to avoid concatenation
// const pay = mortgage* (parseInt(interestRate)*(1 + parseInt(interestRate))^amortizationPeriod)
// const pay = mortgage* (parseInt(rate)*(Math.pow(1 + parseInt(rate), payments)))/ (Math.pow(1 + parseInt(rate), payments) - 1)
const pay = mortgage*rate*(Math.pow(1 + rate), payments)/ (Math.pow(1 + rate), payments) - 1

    // function termPayments() {
    // //    return  mortgage*(interestRate(1 + interestRate)^amortizationPeriod) / ((1 + interestRate)^amortizationPeriod - 1)
    // return mortgage*(interestRate(1 + interestRate))
    // }

    console.log("duh", pay)
    console.log("duh2", interestRate)
    console.log("duh3", mortgage)

    // console.log("chill", termPayments)
    // Here’s a breakdown of each of the variables:

    // M = Total monthly payment
    // P = The total amount of your loan
    // I = Your interest rate, as a monthly percentage
    // N = The total amount of months in your timeline for paying off your mortgage




  return (
    <div>
      <table className='summaryTable'>
        <caption>Calculation Summary</caption>
        <thread>
          <tr>
            <th >Category</th>
            <th>Term</th>
            <th>Amortization Period</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>Number of Payments</td>
            <td>{payments}</td>
            <td>{amortizationPeriodPayments}</td>
          </tr>

          <tr>
            <td>Mortgage Payments</td>
            <td>5</td>
            <td>200</td>
          </tr>

          <tr>
            <td>Prepayment</td>
            <td>5</td>
            <td>200</td>
          </tr>

          <tr>
            <td>Interest Payments</td>
            <td>5</td>
            <td>200</td>
          </tr>

          <tr>
            <td>Total Costs</td>
            <td>5</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default summary;
