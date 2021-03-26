import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { getMovieList, getMoviesByVisibilityFilter } from "../redux/selectors";
import Pagination from '@material-ui/lab/Pagination';
import Header from './Header';
import Footer from './Footer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Home = ({ movies }) => {
    return (
        <div>
            <Header />
            <div>
                < ul className="movie-list" >
                    {movies && movies.length
                        ? movies.map((movie) => {
                            return <MovieCard key={`movie-${movie.id}`} movie={movie} />;
                        })
                        : "No more movies!"
                    }
                </ul >
                <div className="pagination">
                    <Pagination count={3} color="primary" />
                    <Select value="12">
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                    </Select>
                </div>
            </div>
            <Footer />
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
export default connect(mapStateToProps)(Home);

