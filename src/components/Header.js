import { connect } from "react-redux";
import React from 'react';
import Select from 'react-select'
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/actions";
import { getMovieList } from "../redux/selectors";

const Header = ({ options, setFilter }) => {
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const handleChange = selectedOptions => {
        setSelectedOptions(selectedOptions);
        if (selectedOptions.length === 0) {
            setFilter(VISIBILITY_FILTERS.ALL)
        }
        else {
            setFilter(selectedOptions.map(element => element.value))
        }

    }
    
    return (
        <>
            <header>
                <Select onChange={handleChange}
                    defaultValue={"all"}
                    isMulti
                    name="category"
                    options={options}
                    value={selectedOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </header>

        </>
    );
}
const mapStateToProps = state => {
    const allMovies = getMovieList(state);
    const optionsArray = allMovies.map(element => element.category);
    let uniqueOption = [...new Set(optionsArray)];
    const options = uniqueOption.map(element => ({ value: element, label: element }))

    return { options };
}

export default connect(mapStateToProps, { setFilter })(Header);
