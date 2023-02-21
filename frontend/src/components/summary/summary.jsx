import "./summary.css";

function Summary(props) {
  const { mortgage, interestRate, amortizationPeriod, paymentFrequency, term } =
    props.details;

  const rate = interestRate / 100 / paymentFrequency;
  console.log("props6", rate);

  const numberofPaymentsforTerms = paymentFrequency * term;
  const numberofPaymentsforAmortizationPeriod =
    paymentFrequency * amortizationPeriod;

  // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].
  const pay =
    Math.round(
      ((mortgage * rate * (1 + rate) ** numberofPaymentsforAmortizationPeriod) /
        ((1 + rate) ** numberofPaymentsforAmortizationPeriod - 1)) *
        100
    ) / 100;

  const totalCostTerm = Math.round(pay * (term * paymentFrequency) * 100) / 100;
  const totalCostAmortizationPeriod =
    Math.round(pay * numberofPaymentsforAmortizationPeriod * 100) / 100;


    // // B = A(1+r)^n - P*(1+r)^(n-1)
    // const InterestPaymentTerm =  Math.round(
    //   ((mortgage * (1 + rate) ** numberofPaymentsforAmortizationPeriod) -
    //     (pay * (1 + rate) ** (numberofPaymentsforAmortizationPeriod - 1))) *
    //     100
    // ) / 100;


  // const InterestPaymentTerm =
  //   totalCostTerm -
  //   numberofPaymentsforTerms / numberofPaymentsforAmortizationPeriod;

  const InterestPaymentTotal =
    Math.round((totalCostAmortizationPeriod - mortgage) * 100) / 100;

  const mortgageAmount = parseInt(mortgage);

  const InterestPaymentTerm = Math.round((InterestPaymentTotal/totalCostAmortizationPeriod)*totalCostTerm)

  const prinpicalTerm = Math.round((mortgage/totalCostAmortizationPeriod)*totalCostTerm)

  console.log("duh", pay);
  console.log("duh2", interestRate);
  console.log("duh3", mortgage);

  // Here’s a breakdown of each of the variables:

  // M = Total monthly payment
  // P = The total amount of your loan
  // I = Your interest rate, as a monthly percentage
  // N = The total amount of months in your timeline for paying off your mortgage

  return (
    <>
      {props.modal && (
        <div className="modal">
          <div classNAme="overlay">
            <table className="modal-content">
              <caption className="calc-title">Calculation Summary</caption>
              <button className="close-modal" onClick={props.toggleModal}>
                X
              </button>
              <tr>
                <th>Category</th>
                <th>Term</th>
                <th>Amortization Period</th>
              </tr>
              <tbody>
                <tr>
                  <td>Number of Payments</td>
                  <td>{numberofPaymentsforTerms.toLocaleString()}</td>
                  <td>
                    {numberofPaymentsforAmortizationPeriod.toLocaleString()}
                  </td>
                </tr>

                <tr>
                  <td>Mortgage Payments</td>
                  <td>${pay.toLocaleString()}</td>
                  <td>${pay.toLocaleString()}</td>
                </tr>

                <tr>
                  <td>Principal Payments</td>
                  <td>{prinpicalTerm.toLocaleString()}</td>
                  <td>${mortgageAmount.toLocaleString()}</td>
                </tr>

                <tr>
                  <td>Interest Payments</td>
                  <td>${InterestPaymentTerm.toLocaleString()}</td>
                  <td>${InterestPaymentTotal.toLocaleString()}</td>
                </tr>

                <tr>
                  <td>Total Costs</td>
                  <td>${totalCostTerm.toLocaleString()}</td>
                  <td>${totalCostAmortizationPeriod.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;
