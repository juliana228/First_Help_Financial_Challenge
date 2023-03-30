import React from 'react';
import './styles/style.css';
import './styles/checkoutStyle.css';
import DeliveryMethod from './checkout/DeliveryMethod';
import Payment from './checkout/Payment';
import PlaceOrder from './checkout/PlaceOrder';

export default function Checkout({
  props,
  totalTicketPrice,
  paymentInformation,
  setPaymentInformation,
}) {
  const ticketSummary = [];
  let totalNumberOfTickets = 0;
  if (props.shows.tickets) {
    for (let show in props.shows.tickets) {
      //for each show that our user has chosen tickets to we will add the number of tickets
      //purchased to 'totalNumberOfTickets' in order to display the user's total correctly later on
      totalNumberOfTickets += props.shows.tickets[show].quantity;
      //we will push a div into 'ticketSummary' array in order to dynamically render divs
      //based on how many shows our user has chosen
      ticketSummary.push(
        <div className="showTicketSummary">
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

  //utilizing Intl.NumberFormat() we can format our ticket prices/totals with ease and ensure
  //that they are in the proper format
  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  let dollarString = new Intl.NumberFormat('en-US', formatting_options);
  let totalPrice = totalTicketPrice + totalNumberOfTickets * 44.08 + 2.95;
  let total = dollarString.format(totalPrice);
  return (
    <div className="checkoutContainer">
      <DeliveryMethod />
      <Payment
        paymentInformation={paymentInformation}
        setPaymentInformation={setPaymentInformation}
      />
      <PlaceOrder
        totalNumberOfTickets={totalNumberOfTickets}
        total={total}
        ticketSummary={ticketSummary}
      />
    </div>
  );
}
