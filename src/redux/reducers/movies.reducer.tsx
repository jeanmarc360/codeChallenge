import {
  FETCH_MOVIES_SUCCEEDED,
  FETCH_MOVIE_SUCCEEDED,
  MoviesActionTypes,
} from '../types';
import {MovieInterface, MovieDetailInterface} from '../types';

interface MoviesState {
  movies: MovieInterface;
  detailMovie: MovieDetailInterface;
}

const initialState: MoviesState = {
  movies: null,
  detailMovie: null,
};
/*const initialState: MoviesState = {
  movies: null,
  detailMovie: null,
};*/

export const moviesReducer = (
  state: MoviesState = initialState,
  action: MoviesActionTypes,
): MoviesState => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCEEDED: {
      //if (state.movies) {
     /* if (state.movies && state.movies.length === 0) {
        console.log('tsy misy ininona');
        //state.movies.push(action.payload);
        return {
          ...state,
          movies: [action.payload],
        };
      } else {
        let found = state.movies.find((e: MovieInterface) => {
          e.page === action.payload.page;
        });
        if (found) {
          console.log('found');
          found.page = action.payload.page;
          found.results = action.payload.results;
          found.total_pages = action.payload.total_pages;
          found.total_results = action.payload.total_results;
          return {
            ...state,
            movies: [...state.movies, found],
          };
        } else {
          console.log('not found');
         // state.movies.push(action.payload);
          return {
            ...state,
            movies: [action.payload],
          };
        }
      }*/
      // }
      
      return {
        ...state,
        movies: action.payload,
      };
    }
    case FETCH_MOVIE_SUCCEEDED: {
      return {
        ...state,
        detailMovie: action.payload,
      };
    }
    default:
      return state;
  }
};
