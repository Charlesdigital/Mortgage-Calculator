import "./summary.css";

function Summary(props) {
  const { mortgage, interestRate, amortizationPeriod, paymentFrequency, term } =
    props.details;

  const rate = interestRate / 100 / paymentFrequency;

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

  const interestPaymentTotal =
    Math.round((totalCostAmortizationPeriod - mortgage) * 100) / 100;

  const mortgageAmount = parseInt(mortgage);

  const interestPaymentTerm = Math.round(
    (interestPaymentTotal / totalCostAmortizationPeriod) * totalCostTerm
  );

  const principalTerm = Math.round(
    (mortgage / totalCostAmortizationPeriod) * totalCostTerm
  );

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
                  <td>{principalTerm.toLocaleString()}</td>
                  <td>${mortgageAmount.toLocaleString()}</td>
                </tr>

                <tr>
                  <td>Interest Payments</td>
                  <td>${interestPaymentTerm.toLocaleString()}</td>
                  <td>${interestPaymentTotal.toLocaleString()}</td>
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
