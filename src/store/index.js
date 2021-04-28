import {createStore } from 'redux';
import {composeWithDevTools } from 'redux-dev-extension';

import rootReducer from '../reducers/rootReducer';


const store = createStore(rootReducer, composeWithDevTools());

export default store;