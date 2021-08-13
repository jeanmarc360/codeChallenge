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
  movies: MovieInterface
) => {
  return {type: FETCH_MOVIES_SUCCEEDED, payload: movies};
};

const fetchDetailMovieSuccess: ActionCreator<MoviesActionTypes> = (
  detailMovie: MovieDetailInterface
) => {
  return {type: FETCH_MOVIE_SUCCEEDED, payload: detailMovie};
};

export const fetchMovie =
  (query: String = '') =>
  async dispatch => {
    dispatch({type: FETCH_MOVIES_INITIATED});

    await get(URLS.SEARCH_URL(query))
      .then((response: any) => {
        // handle success
        //console.log(response.data);
        dispatch(fetchMovieSuccess(response.data));
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
        dispatch({type: FETCH_MOVIES_FAILED});
        console.error('%cData Fetching Error:', 'font-size: 18px', error);
      })
      .then(() => {
        // always executed
      });
  };

export const clickMovies = id_movie => async dispatch => {
  dispatch({type: FETCH_MOVIE_INITIATED});
  try {
    const response = await get(URLS.DETAIL_MOVIE(id_movie));
    dispatch(fetchDetailMovieSuccess(response.data));
  } catch (error) {
    dispatch({type: FETCH_MOVIE_FAILED});
    console.error('%cData Fetching Error:', 'font-size: 18px', error);
  }
};
