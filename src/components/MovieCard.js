import React from "react";
import { connect } from "react-redux";
import ToggleButtons from './ToggleLikeDislikeButton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { removeMovie } from "../redux/actions";


const MovieCard = ({ movie, removeMovie }) => {
    const useStyles = makeStyles({
        root: {
            margin: '1rem',
        },
    });
    const classes = useStyles();
    return (
        <li className="movie-item" >
            <Card className={classes.root}>
                <CardActionArea>
                    <img alt="" src={movie.lien}></img>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ToggleButtons key={`movie-${movie.id}`} movie={movie}></ToggleButtons>
                    <Button size="small" color="secondary" onClick={() => { removeMovie(movie.id) }}>
                        Remove
                    </Button>
                </CardActions>
            </Card>
        </li>
    );
}
export default connect(null, { removeMovie })(MovieCard);