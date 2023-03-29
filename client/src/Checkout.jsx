import React from 'react';
import './styles/style.css';
import DeliveryMethod from './checkout/DeliveryMethod';
import Payment from './checkout/Payment';
import PlaceOrder from './checkout/PlaceOrder';

export default function Checkout({ props, totalTicketPrice }) {
  const ticketSummary = [];
  let totalNumberOfTickets = 0;
  if (props.shows.tickets) {
    for (let show in props.shows.tickets) {
      totalNumberOfTickets += props.shows.tickets[show].quantity;
      ticketSummary.push(
        <div>
          <p>
            {show}: ${props.shows.tickets[show].price} x
            {props.shows.tickets[show].quantity}
          </p>
          <p>
            $
            {props.shows.tickets[show].price *
              props.shows.tickets[show].quantity}
          </p>
        </div>
      );
    }
  }
  let total = totalTicketPrice + totalNumberOfTickets * 44.08;

  return (
    <div>
      <DeliveryMethod />
      <Payment />
      <PlaceOrder
        totalNumberOfTickets={totalNumberOfTickets}
        total={total}
        ticketSummary={ticketSummary}
      />
    </div>
  );
}
