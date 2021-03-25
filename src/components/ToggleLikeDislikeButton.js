import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { addLike, removeLike, addDislike, removeDislike } from "../redux/actions";
import { connect } from "react-redux";



const ToggleButtons = ({ movie, addLike, removeLike, addDislike, removeDislike }) => {

    const [vote, setVote] = React.useState('');

    const handleChange = (event, newVote) => {
        debugger
        if ("like" === newVote) {

            addLike(movie.id)
            if ("dislike" === vote) {
                removeDislike(movie.id)
            }
        }
        if ("dislike" === newVote) {
            addDislike(movie.id)
            if ("like" === vote) {
                removeLike(movie.id)
            }
        }

        if (null === newVote && "like" === vote) {
            removeLike(movie.id)
        }
        if (null === newVote && "dislike" === vote) {
            removeDislike(movie.id)
        }

        setVote(newVote);
    };

    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>

                <ToggleButtonGroup value={vote} size="small" exclusive onChange={handleChange} >
                    <ToggleButton value="like">
                        <ThumbUpAltIcon fontSize="small" color="primary"  /> {movie.likes}
                        
                    </ToggleButton>
                    <ToggleButton value="dislike" >
                        <ThumbDownIcon fontSize="small" color="secondary" /> {movie.dislikes}
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );

}
export default connect(null, { addLike, removeLike, addDislike, removeDislike })(ToggleButtons);