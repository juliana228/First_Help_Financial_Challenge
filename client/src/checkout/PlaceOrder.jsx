import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder({
  totalNumberOfTickets,
  total,
  ticketSummary,
}) {
  const navigate = useNavigate();
  return (
    <div className="placeOrder">
      <div className="checkoutTotal">
        <h3>Total</h3>
        <h3>{total}</h3>
      </div>
      <div className="ticketBreakdown">
        <h4>Tickets</h4>
        {ticketSummary}
      </div>
      <div className="notesFromSeller">
        <h4>Notes From the Venue</h4>
        <p>
          Proof of at least one dose of COVID-19 vaccination for ages 5-11 and
          guest ages 12 and up will be required to show proof of two COVID-19
          vaccine doses of one dose of the Johnson and Johnson vaccine. Masks
          must be worn at all times.
        </p>
      </div>
      <div className="fees">
        <div className="feeLeft">
          <p>Service Fee: $44.08 x {totalNumberOfTickets}</p>
          <p>Order Processing Fee</p>
        </div>
        <div className="feeRight">
          <p>${44.08 * totalNumberOfTickets}</p>
          <p>$2.95</p>
        </div>
      </div>
      <div className="deliveryMethod">
        <p>Mobile Entry</p>
        <p>Free</p>
      </div>
      <p>*All Sales Final - No Refunds</p>
      <button className="placeOrder" onClick={() => navigate('/success')}>
        Place Order
      </button>
    </div>
  );
}
