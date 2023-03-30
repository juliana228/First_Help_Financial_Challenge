import React from 'react';
import '../styles/checkoutStyle.css';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder({
  totalNumberOfTickets,
  total,
  ticketSummary,
}) {
  const navigate = useNavigate();

  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  let dollarString = new Intl.NumberFormat('en-US', formatting_options);
  let serviceFees = 44.08 * totalNumberOfTickets;

  let totalServiceFees = dollarString.format(serviceFees);

  return (
    <div className="placeOrder">
      <div className="checkoutTotal">
        <h2>Total</h2>
        <h2>{total}</h2>
      </div>
      <div className="ticketBreakdown">
        <h3>Tickets</h3>
        {ticketSummary}
      </div>
      <div className="notesFromSeller">
        <h3>Important COVID-19 Notice:</h3>
        <p>
          Proof of at least one dose of COVID-19 vaccination for ages 5-11 and
          guest ages 12 and up will be required to show proof of two COVID-19
          vaccine doses of one dose of the Johnson and Johnson vaccine (for most
          venues). Venue-specific COVID-19 protocols can be found on their
          respective websites.
        </p>
      </div>
      <div className="fees">
        <div className="feeLeft">
          <p>Service Fee: $44.08 x {totalNumberOfTickets}</p>
          <p>Order Processing Fee</p>
        </div>
        <div className="feeRight">
          <p>{totalServiceFees}</p>
          <p>$2.95</p>
        </div>
      </div>
      <div className="deliveryMethodPreview">
        <p>Mobile Entry</p>
        <p>Free</p>
      </div>
      <p>*All Sales Final - No Refunds</p>
      <div className="placeOrderButtonContainer">
        <button
          className="placeOrderButton"
          onClick={() => navigate('/success')}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
