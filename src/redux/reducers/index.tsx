import {combineReducers} from 'redux';
import {moviesReducer} from './movies/movies.reducer';
import { LoginReducer } from './login/login.reducer';

export const rootReducer = combineReducers({
  movieReducer: moviesReducer,
  LoginReducer: LoginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
