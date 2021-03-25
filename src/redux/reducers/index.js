import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import movies from "./movies";

export default combineReducers({ movies, visibilityFilter });
