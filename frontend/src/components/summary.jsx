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
    const numberofPaymentsforTerms = paymentFrequency*term
    console.log("props5", numberofPaymentsforTerms)
    const numberofPaymentsforAmortizationPeriod = amortizationPeriod*paymentFrequency



//parseInt to avoid concatenation
// const pay = mortgage* (parseInt(interestRate)*(1 + parseInt(interestRate))^amortizationPeriod)
// const pay = mortgage* (parseInt(rate)*(Math.pow(1 + parseInt(rate), payments)))/ (Math.pow(1 + parseInt(rate), payments) - 1)
const pay = Math.round((mortgage*rate*(Math.pow(1 + rate), numberofPaymentsforTerms)/(Math.pow(1 + rate), numberofPaymentsforTerms) - 1)*100)/100

const totalCostTerm = pay*(term*paymentFrequency)
const totalCostAmortizationPeriod = pay*(amortizationPeriod*paymentFrequency)

const InterestPaymentTerm = totalCostTerm - (numberofPaymentsforTerms/numberofPaymentsforAmortizationPeriod)

const InterestPaymentTotal = totalCostAmortizationPeriod - mortgage
const InterestPaymentTerm = totalCostAmortizationPeriod - mortgage

// const InterestPaymentTerm =  InterestPaymentTotal*
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
            <td>{numberofPaymentsforTerms}</td>
            <td>{numberofPaymentsforAmortizationPeriod}</td>
          </tr>

          <tr>
            <td>Mortgage Payments</td>
            <td>{pay}</td>
            <td>{pay}</td>
          </tr>

          <tr>
            <td>Principal Payments</td>
            <td>5</td>
            <td>{mortgage}</td>
          </tr>

          <tr>
            <td>Interest Payments</td>
            <td></td>
            <td>{InterestPaymentTotal}</td>
          </tr>

          <tr>
            <td>Total Costs</td>
            <td>{totalCostTerm}</td>
            <td>{totalCostAmortizationPeriod}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default summary;
