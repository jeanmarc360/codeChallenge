import {
  FETCH_MOVIE_INITIATED,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCEEDED,
  CLICK_MOVIE,
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED,
} from '../types';
//import { storiesService } from '../../services';
import {
  MovieInterface,
  MovieDetailInterface,
  MoviesActionTypes,
} from '../types';
import {ActionCreator} from 'redux';
import {get} from '../../services/index';
import {URLS} from '../../services/url';

const fetchMovieSuccess: ActionCreator<MoviesActionTypes> = (
  movies: MovieInterface,
) => {
  return {type: FETCH_MOVIES_SUCCEEDED, payload: movies};
};
 

const fetchDetailMovieSuccess: ActionCreator<MoviesActionTypes> = (
  detailMovie: MovieDetailInterface,
) => {
  return {type: FETCH_MOVIE_SUCCEEDED, payload: detailMovie};
};

export const fetchMovie =
  (query: String = '', page: number = 1) =>
  async (dispatch, getState) => {
    const movies: MovieInterface[] = getState().movieReducer.movies;

    dispatch({type: FETCH_MOVIES_INITIATED});

    await get(URLS.SEARCH_URL(query, page))
      .then((response: any) => {
        dispatch(fetchMovieSuccess(response.data));
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
        dispatch({type: FETCH_MOVIES_FAILED});
        console.error('Data Fetching :', error);
      })
      .then(() => {
        // always executed
      });
  };

export const clickMovies = (id_movie: number) => async dispatch => {
  dispatch({type: FETCH_MOVIE_INITIATED});

  await get(URLS.DETAIL_MOVIE(id_movie))
    .then((response: any) => {
      // handle success
      console.log(response.data);
      dispatch(fetchDetailMovieSuccess(response.data));
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
      dispatch({type: FETCH_MOVIE_FAILED});
      console.error('%cData Fetching Error:', 'font-size: 18px', error);
    })
    .then(() => {
      // always executed
    });
};
