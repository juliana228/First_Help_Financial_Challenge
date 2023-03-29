import { combineReducers } from 'redux';
import ticketReducer from './Tickets/ticket.reducer';

const reducer = combineReducers({
  tickets: ticketReducer,
});

export default reducer;
