import {createStore } from 'redux';
import {composeWithDevTools } from 'redux-dev-extension';


const store = createStore(, composeWithDevTools());

export default store;