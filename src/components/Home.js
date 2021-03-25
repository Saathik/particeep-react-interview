import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { getMovieList, getMoviesByVisibilityFilter } from "../redux/selectors";
import { setFilter } from "../redux/actions";

import Header from './Header';
import Footer from './Footer';

const Home = ({ movies }) => {
    return (
        <div>
            <Header></Header>
            <div className="main">
                < ul className="movie-list" >
                    {movies && movies.length
                        ? movies.map((movie) => {
                            return <MovieCard key={`movie-${movie.id}`} movie={movie} />;
                        })
                        : "No movies, yay!"
                    }
                </ul >
            </div>
            <Footer></Footer>
        </div>
    );
}
const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const movies = getMoviesByVisibilityFilter(state, visibilityFilter);
    const allMovies = getMovieList(state);
    const optionsArray = allMovies.map(element => element.category);
    let uniqueOption = [...new Set(optionsArray)];
    const options = uniqueOption.map(element => ({ value: element, label: element }))

    return { movies, options };
}
export default connect(mapStateToProps, { setFilter })(Home);
