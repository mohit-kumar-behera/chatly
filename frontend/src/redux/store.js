import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { saveToLocalStorage, fetchFromLocalStorage } from '../../src/utils';

import rootReducers from './rootReducer';

const store = createStore(
  rootReducers,
  fetchFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
