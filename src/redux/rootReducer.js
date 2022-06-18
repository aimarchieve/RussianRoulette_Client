import { combineReducers } from 'redux';
// slices
import gameReducer from './slices/game';
import userReducer from './slices/user';
import stakingReducer from './slices/staking';

// ----------------------------------------------------------------------



const rootReducer = combineReducers({
    game: gameReducer,
    user: userReducer,
    staking: stakingReducer,
});

export { rootReducer };
