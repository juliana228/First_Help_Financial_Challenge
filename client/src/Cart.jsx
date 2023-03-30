import React from 'react';
import ShowPreview from './ShowPreview';
import { useNavigate } from 'react-router-dom';

export default function Cart({ props, setTotalTicketPrice, totalTicketPrice }) {
  const navigate = useNavigate();
  const ticketPreview = [];
  let totalPreview = 0;
  if (props.shows.tickets) {
    //we will loop through the various shows saved in our props
    for (let show in props.shows.tickets) {
      //multiply the price of individual tickets by the amount of tickets the user has selected
      //add add this value to totalPreview
      totalPreview +=
        props.shows.tickets[show].price * props.shows.tickets[show].quantity;
      //push ShowPreview component to the ticketPreview array, passing down the show/ticket
      //details as 'showInfo', the artist name(represented by show) as 'artist' and a unique key
      ticketPreview.push(
        <ShowPreview
          showInfo={props.shows.tickets[show]}
          artist={show}
          key={show}
        />
      );
    }
    //set the totalTicketPrice to be the value of totalPreview
    setTotalTicketPrice(totalPreview);
  }

  return (
    <div>
      {Object.keys(props.shows.tickets).length ? (
        <div>
          <div>{ticketPreview}</div>
          <div className="previewTotal">
            <h1>Total (before taxes and fees): </h1>
            <h1> {` $${totalTicketPrice}`}</h1>
          </div>
          <div>
            <button
              className="checkoutButton"
              onClick={() => navigate('/checkout')}
            >
              Continue to checkout
            </button>
          </div>
        </div>
      ) : (
        <div>Cart Empty</div>
      )}
    </div>
  );
}
