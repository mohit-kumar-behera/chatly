import { combineReducers } from 'redux';

import userReducer from './User/reducer';

const rootReducers = combineReducers({
  user: userReducer,
});

export default rootReducers;
