import { ADD_TICKET, DELETE_TICKET } from './ticket.types';

export const addTicket = (showInfo) => {
  console.log('this is showInfo in actions: ', showInfo);
  return {
    type: ADD_TICKET,
    payload: showInfo,
  };
};

export const deleteTicket = (artist) => {
  return {
    type: DELETE_TICKET,
    payload: {
      artist: artist,
    },
  };
};
