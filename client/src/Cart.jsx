import React from 'react';
import ShowPreview from './ShowPreview';
import { useNavigate } from 'react-router-dom';

export default function Cart({ props, setTotalTicketPrice, totalTicketPrice }) {
  const navigate = useNavigate();
  const ticketPreview = [];
  let totalPreview = 0;
  if (props.shows.tickets) {
    for (let show in props.shows.tickets) {
      //   console.log('this is show', show);
      totalPreview += props.shows.tickets[show].price;
      ticketPreview.push(
        <ShowPreview
          showInfo={props.shows.tickets[show]}
          artist={show}
          key={show}
        />
      );
    }
    setTotalTicketPrice(totalPreview);
  }

  return (
    <div>
      {Object.keys(props.shows.tickets).length ? (
        <div>
          <div>{ticketPreview}</div>
          <div className="previewTotal">
            <h1>Total Price (before taxes and fees): </h1>
            <h1> {` $${totalTicketPrice}`}</h1>
          </div>
          <div>
            <button onClick={() => navigate('/checkout')}>
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
