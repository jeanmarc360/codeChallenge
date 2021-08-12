import {FETCH_MOVIES_SUCCEEDED, MoviesActionTypes} from '../types';
import {MovieInterface, MovieDetailInterface} from '../types';

interface MoviesState {
  movies: MovieInterface[];
  detailMovie: MovieDetailInterface;
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesReducer = (
  state: MoviesState = initialState,
  action: MoviesActionTypes,
): MoviesState => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCEEDED: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    default:
      return state;
  }
};
