import { VISIBILITY_FILTERS } from "../constants";

export const getMoviesState = store => store.movies;

export const getMovieList = store =>
  getMoviesState(store) ? getMoviesState(store).movies : [];


/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */

export const getMoviesByVisibilityFilter = (store, visibilityFilter) => {
  const allMovies = getMovieList(store);

  if (visibilityFilter === VISIBILITY_FILTERS.ALL) {
    return allMovies;
  }
  return allMovies.filter(movie => visibilityFilter.indexOf(movie.category) >= 0)
};
