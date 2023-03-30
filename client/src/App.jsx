import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import { addTicket, deleteTicket } from './redux/Tickets/ticket.actions';
import { connect } from 'react-redux';
import Cart from './Cart';
import Checkout from './Checkout';
import SuccessPage from './SuccessPage';

function App(props) {
  //we will use the useState hook to keep track of the totalTicketPrice
  const [totalTicketPrice, setTotalTicketPrice] = useState(0);
  //app will be where we define the various routes that will be used through this app
  return (
    <Routes>
      <Route path="/" element={<Landing props={props} />} />
      <Route
        path="/cart"
        element={
          <Cart
            props={props}
            setTotalTicketPrice={setTotalTicketPrice}
            totalTicketPrice={totalTicketPrice}
          />
        }
      />
      <Route
        path="/checkout"
        element={<Checkout props={props} totalTicketPrice={totalTicketPrice} />}
      />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

//add state to props in order to be used throughout application via props
const mapStateToProps = (state) => {
  return {
    shows: state,
  };
};

//add actions to props in order to be used throughout application via props
const mapDispatchToProps = (dispatch) => {
  return {
    addTicket: (showInfo) => dispatch(addTicket(showInfo)),
    deleteTicket: (artist) => dispatch(deleteTicket(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
