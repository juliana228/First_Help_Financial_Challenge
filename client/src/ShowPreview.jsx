import React from 'react';
import './styles/style.css';

//this component will be shown to the user right before they proceed to checkout
//in order to give the user the opportunity to review their cart contents before moving
//forward
export default function ShowPreview({ showInfo, artist }) {
  //destructure tourName, location, date, quantity, and price from showInfo props
  const { tourName, location, date, quantity, price } = showInfo;
  return (
    <div className="showPreviewDetails">
      <div className="showPreviewDetailsLeft">
        <h2>{artist}</h2>
        <h3>{tourName}</h3>
        <h3>{location}</h3>
        <h3>{date}</h3>
      </div>
      <div className="showPreviewDetailsRight">
        <h1>{`$${price}`}</h1>
        <div className="ticketButtonContainer">
          <div className="previewQuantity">{`x${quantity}`}</div>
        </div>
      </div>
    </div>
  );
}
