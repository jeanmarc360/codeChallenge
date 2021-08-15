export interface MovieInterface {
  page: number
  results: ResultMovieInterface[]
  total_pages: number
  total_results: number
}
interface ResultMovieInterface {
  id: String
  name: String
  adult: Boolean
  backdrop_path: String
  genre_ids: Array<number>
  original_language: String
  original_title: String
  overview: String
  popularity: number
  poster_path: String
  release_date: String
  title: String
  video: boolean
  vote_average: number
  vote_count: number
}

interface BelongToCollectionInterface {
  id: number
  name: String
  poster_path: String
  backdrop_path: String
}
interface ProductionCompanies {
  id: number
  logo_path: String
  name: String
  origin_country: String
}
interface ProductionCountries {
  iso_3166_1: String
  name: String
}
interface SpokenLanguages {
  english_name: String
  iso_639_1: String
  name: String
}
interface Genre {
  id: number
  name: String
}
export interface MovieDetailInterface {
  adult: boolean
  backdrop_path: String
  belongs_to_collection: BelongToCollectionInterface
  budget: number
  genres: Genre[]
  homepage: String
  id: number
  imdb_id: String
  original_language: String
  original_title: String
  overview: String
  popularity: number
  poster_path: String
  production_companies: ProductionCompanies[]
  production_countries: ProductionCountries[]
  release_date: String
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguages[]
  status: String
  tagline: String
  title: String
  video: boolean
  vote_average: number
  vote_count: number
}

export const FETCH_MOVIE_INITIATED = 'FETCH_MOVIE_INITIATED';
export const FETCH_MOVIE_FAILED = 'FETCH_MOVIE_FAILED';
export const FETCH_MOVIE_SUCCEEDED = 'FETCH_MOVIE_SUCCEEDED';
export const CLICK_MOVIE = 'CLICK_MOVIE';
export const FETCH_MOVIES_INITIATED = 'FETCH_MOVIES_INITIATED';
export const FETCH_MOVIES_FAILED = 'FETCH_MOVIES_FAILED';
export const FETCH_MOVIES_SUCCEEDED = 'FETCH_MOVIES_SUCCEEDED';

interface SearchMoviesAction {
  type: typeof FETCH_MOVIES_SUCCEEDED;
  payload: MovieInterface;
}
interface DetailMovieAction {
  type: typeof FETCH_MOVIE_SUCCEEDED;
  payload: MovieDetailInterface;
}

export type MoviesActionTypes = SearchMoviesAction | DetailMovieAction;
