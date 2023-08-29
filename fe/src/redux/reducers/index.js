// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import gbkReducer from './gbkReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  playerChoice: gbkReducer,
  // Add more reducers here
});

export default rootReducer;
