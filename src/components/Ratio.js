import React from 'react';
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";

const Ratio = ({ movie }) => {
    return (
        <div className="ratio-container">
            {(100 * movie.likes / (movie.likes + movie.dislikes) > 0) && <Box width={100 * movie.likes / (movie.likes + movie.dislikes) + "%"} bgcolor="blue" p={0.5} my={0.2}></Box>}
            {(100 * movie.dislikes / (movie.likes + movie.dislikes) > 0) && <Box width={100 * movie.dislikes / (movie.likes + movie.dislikes) + "%"} bgcolor="red" p={0.5} my={0.2}></Box>}
        </div>

    );
}
export default connect(null, {})(Ratio);