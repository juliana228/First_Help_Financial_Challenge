import React from 'react';
import './styles/style.css';

export default function ShowPreview({ showInfo, artist }) {
  const { tourName, location, date, quantity, price } = showInfo;
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
          <div className="previewQuantity">{`x${quantity}`}</div>
        </div>
      </div>
    </div>
  );
}
