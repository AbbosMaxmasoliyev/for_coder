// store.js
import { createStore } from 'redux';
import itemReducer from './rootReducer';

const store = createStore(itemReducer);

export default store;