import React, { useEffect, useState } from 'react';
import './styles/style.css';

export default function ShowDetails({ showInfo, props }) {
  //destructure specific show details from showInfo props
  const { artist, tourName, date, location, price } = showInfo;
  //this component will be divided into two halves: the left will detail important
  //show information, and the right will have the price, and allow the user to
  //add tickets to their cart

  return (
    <div className="showDetails">
      <div className="showDetailsLeft">
        <h2>{artist}</h2>
        <h4>{tourName}</h4>
        <h4>{location}</h4>
        <h4>{date}</h4>
      </div>
      <div className="showDetailsRight">
        <h1>{`$${price}`}</h1>
        <div className="ticketButtonContainer">
          <button
            className="ticketButton"
            onClick={() => props.props.deleteTicket(artist)}
          >
            -
          </button>
          <div>
            {!props.props.shows.tickets[artist]
              ? 0
              : props.props.shows.tickets[artist].quantity}
          </div>
          <button
            className="ticketButton"
            onClick={() => props.props.addTicket(showInfo)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
