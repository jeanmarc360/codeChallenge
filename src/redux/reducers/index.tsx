import {combineReducers} from 'redux';
import {moviesReducer} from './movies.reducer';

export const rootReducer = combineReducers({
  movieReducer: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
