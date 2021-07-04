import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveReducer from './reducer_user';

const rootReducer = combineReducers({
  users: BooksReducer,
  activeUser: ActiveReducer
});

export default rootReducer;
