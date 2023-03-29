import React, { useEffect, useState } from 'react';
import './styles/style.css';
// import { connect } from 'react-redux';
// import store from './redux/store';
// import { addTicket, deleteTicket } from './redux/Tickets/ticket.actions';

export default function ShowDetails({ showInfo, props }) {
  //destructure specific show details from showInfo props
  const { artist, tourName, date, location, price } = showInfo;
  //our component will be divided into two halves: the left will detail important
  //show information, and the right will have the price, and allow the user to
  //add tickets to their cart
  //   console.log('this is the store: ', store);
  //   console.log('this is showInfo: ', props.shows.tickets[artist]);
  // console.log('this is props: ', props);
  const [ticketState, setTicketState] = useState(null);
  useEffect(() => {
    setTicketState(props.props);
  }, [props]);
  //   console.log('this is ticketState: ', ticketState);
  // console.log('this is ticketState', ticketState);
  //   console.log('this is artist in props: ', props.shows.tickets[artist]);
  return (
    <div className="showDetails">
      <div className="showDetailsLeft">
        <h2>{artist}</h2>
        <h3>{tourName}</h3>
        <h3>{location}</h3>
        <h3>{date}</h3>
      </div>
      <div className="showDetailsRight">
        <h1>{`$${price}`}</h1>
        <div className="ticketButtonContainer">
          <button onClick={() => props.props.deleteTicket(artist)}>-</button>
          <div>
            {!props.props.shows.tickets[artist]
              ? 0
              : props.props.shows.tickets[artist].quantity}
          </div>
          <button onClick={() => props.props.addTicket(showInfo)}>+</button>
        </div>
      </div>
    </div>
  );
}
