/**
 *
https://api.themoviedb.org/3/configuration?api_key=b45db6c23415002ee525e0bb27168544

https://api.themoviedb.org/3/search/movie?api_key=b45db6c23415002ee525e0bb27168544&query=spiderman

https://api.themoviedb.org/3/movie/557?api_key=b45db6c23415002ee525e0bb27168544
 */

const BASEURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b45db6c23415002ee525e0bb27168544';
const URL_IMAGE = 'https://image.tmdb.org/t/p';

export const URLS = {
  BASE: () => BASEURL,
  URL_IMAGE: (size: String, url: String) => `${URL_IMAGE}/${size}/${url}`,
  SEARCH_URL: (query: String, page: number) => `${BASEURL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  DETAIL_MOVIE: (id_movie: number) => `${BASEURL}/movie/${id_movie}?api_key=${API_KEY}`,
};
