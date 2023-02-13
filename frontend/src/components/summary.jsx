import React from "react";

function summary() {
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
            <td>5</td>
            <td>200</td>
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
