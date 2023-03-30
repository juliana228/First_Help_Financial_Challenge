import React, { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';
import { useNavigate } from 'react-router-dom';

export default function Landing(props) {
  const navigate = useNavigate();
  //the landing page for this application will be a page detailing all show information
  //which will be organized into seperate components for each show (ShowDetails component)

  //execute a get request to pull show information from mongoDB
  const [allShows, setAllShows] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((data) => data.json())
      //data will be returned as an array of objects, each object representing details for
      // a specific show
      .then((showData) => {
        //create JSX components for each show object
        const showInfo = showData.map((info) => {
          return (
            <ShowDetails showInfo={info} props={props} key={info.artist} />
          );
        });
        setAllShows(showInfo);
      });
  }, [props]);
  return (
    <div className="landingDiv" key="landingDiv">
      <div className="allShows">{allShows}</div>
      <div className="previewCartButtonContainer">
        <button className="previewCartButton" onClick={() => navigate('/cart')}>
          Preview Cart
        </button>
      </div>
    </div>
  );
}
