import { ADD_TICKET, DELETE_TICKET } from './ticket.types';

//will be an object of objects where the keys represent different shows, and the values
//will be an object containing the location, tourName, date, and price of individual ticket
const INITIAL_STATE = {};

const ticketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TICKET:
      //if our user adds a ticket to their cart, we want to either increment number of tickets
      //to that show, or add a new object to the state representing the new tickets to a new
      //show
      const { artist, tourName, price, location, date } = action.payload;
      //create an object to save new show information in state
      const showInfo = {
        tourName,
        price,
        location,
        date,
      };
      // console.log('this is the artist: ', action.payload.artist);
      // if state does not include the artist we are trying to add a ticket for,

      if (!state[artist]) {
        // console.log('inside conditional');
        // console.log('this is state: ', state);

        return {
          ...state,
          [artist]: { ...showInfo, quantity: 1 },
        };
        //if we already have the artist we are trying to add a ticket for,
      } else {
        //again, we will copy the state into newState object
        // const newState = {
        //   ...state,
        // };
        // //increment the quantity of this artist's show by 1
        // newState.artist.quantity = newState.artist.quantity++;
        //return newState
        // console.log('ticket state', state);
        let numOfTickets = state[artist].quantity;
        // console.log('number of tickets: ', numOfTickets);
        return {
          ...state,
          [artist]: { ...showInfo, quantity: numOfTickets + 1 },
        };
      }
    case DELETE_TICKET:
      // const { artist, tourName, price, location, date } = action.payload;
      //if the quantity of the tickets does not equal 1
      // console.log('this is the artist in delete func: ', artist);
      const artistName = action.payload.artist;
      if (state[artistName] === undefined) {
        return state;
      } else if (state[artistName].quantity > 1) {
        // //make a copy of the current state and save in a new object
        // const newState = { ...state };
        // //decrease the quantity of this show's tickets
        // newState[artist][quantity]--;
        // //return the newState object
        // return {
        //   ...newState,
        // };
        let numOfTickets = state[artistName].quantity;
        return {
          ...state,
          [artistName]: { ...state[artistName], quantity: numOfTickets - 1 },
        };
        //if the quantity of tickets is 1, then by deleting a ticket, we will obviously be
        //out of tickets, so we can delete this entry from our state altogether
      } else {
        //create a copy of state
        const newState = { ...state };
        //delete the key for this show
        delete newState[artistName];
        //return the new state
        return {
          ...newState,
        };
      }
    default:
      return state;
  }
};

export default ticketReducer;
