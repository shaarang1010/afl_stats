import { combineReducers } from 'redux';

import gamesReducer from './gamesReducer';

import teamReducer from './teamReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    team: teamReducer
});

export default rootReducer;