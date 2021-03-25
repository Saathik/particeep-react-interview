import { SET_FILTER, REMOVE_MOVIE, ADD_LIKE, REMOVE_LIKE, ADD_DISLIKE, REMOVE_DISLIKE } from "./actionTypes";

export const removeMovie = id => ({
  type: REMOVE_MOVIE,
  payload: { id }
});

export const addLike = id => ({
  type: ADD_LIKE,
  payload: { id }
});
export const removeLike = id => ({
  type: REMOVE_LIKE,
  payload: { id }
});
export const addDislike = id => ({
  type: ADD_DISLIKE,
  payload: { id }
});
export const removeDislike = id => ({
  type: REMOVE_DISLIKE,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
