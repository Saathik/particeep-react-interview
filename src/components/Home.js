import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import Select from 'react-select'
import { getMovieList, getMoviesByVisibilityFilter } from "../redux/selectors";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const Home = ({ movies, options, setFilter }) => {
    const handleChange = selectedOptions => {
        setSelectedOptions(selectedOptions);
        if (selectedOptions.length === 0) {
            setFilter(VISIBILITY_FILTERS.ALL)
        }
        else {
            setFilter(selectedOptions.map(element => element.value))
        }

    }

    const [selectedOptions, setSelectedOptions] = React.useState([]);
    return (
        <div>
            <Select onChange={handleChange}
                defaultValue={"all"}
                isMulti
                name="category"
                options={options}
                value={selectedOptions}
                className="basic-multi-select"
                classNamePrefix="select"
            />
            < ul className="movie-list" >
                {movies && movies.length
                    ? movies.map((movie, index) => {
                        return <MovieCard key={`movie-${movie.id}`} movie={movie} />;
                    })
                    : "No movies, yay!"
                }
            </ul >
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
