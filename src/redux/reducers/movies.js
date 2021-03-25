import { REMOVE_MOVIE, ADD_DISLIKE,ADD_LIKE,REMOVE_DISLIKE,REMOVE_LIKE } from "../actionTypes";

const initialState = {
    movies: [{
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        lien: 'https://www.cinehorizons.net/sites/default/files/affiches/1298439445-oceans-8.jpg'
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        lien: 'https://cinehorizons.net/sites/default/files/affiches/804242890-midnight-sun.jpg'
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        lien: 'https://cinehorizons.net/sites/default/files/styles/affiches-m/public/affiches/58197700-les-indestructibles-2.jpg?itok=VMH-5nRu '
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        lien: 'https://www.cinehorizons.net/sites/default/files/affiches/641175563-sans-un-bruit.jpg'
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        lien: 'https://cinehorizons.net/sites/default/files/affiches/1988395237-creed-ii.jpeg'
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3,
        lien: 'https://www.cinehorizons.net/sites/default/files/affiches/affiche_pulp_fiction.jpg'
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        lien: 'https://www.cinehorizons.net/sites/default/files/affiches/affiche_pulp_fiction.jpg'
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        lien: 'https://www.cinehorizons.net/sites/default/files/affiches/affiche_seven.jpg'
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        lien: 'https://cinehorizons.net/sites/default/files/affiches/1055142721-inception.jpg'
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        lien: 'https://cinehorizons.net/sites/default/files/affiches/1572858886-gone-girl.jpg'
    },]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case REMOVE_MOVIE:
            {
                const id = action.payload.id;
                debugger
                return {
                    ...state,
                    movies: state.movies.filter((movie) => movie.id !== id)
                };
            }
        case ADD_LIKE: {
            const id = action.payload.id;
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id !== id) {
                        // This isn't the item we care about - keep it as-is
                        return movie
                    }
                    return {
                        id: movie.id,
                        title: movie.title,
                        category: movie.category,
                        likes: movie.likes + 1,
                        dislikes: movie.dislikes,
                        lien: movie.lien
                    }
                })
            };
        }
        case ADD_DISLIKE: {
            const id = action.payload.id;
            
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    
                    if (movie.id !== id) {
                        // This isn't the item we care about - keep it as-is
                        return movie
                    }
                    return {
                        id: movie.id,
                        title: movie.title,
                        category: movie.category,
                        likes: movie.likes,
                        dislikes: movie.dislikes + 1,
                        lien: movie.lien
                    }
                })
            };
        }
        case REMOVE_LIKE: {
            const id = action.payload.id;
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id !== id) {
                        // This isn't the item we care about - keep it as-is
                        return movie
                    }
                    return {
                        id: movie.id,
                        title: movie.title,
                        category: movie.category,
                        likes: movie.likes - 1,
                        dislikes: movie.dislikes,
                        lien: movie.lien
                    }
                })
            };
        }
        case REMOVE_DISLIKE: {
            const id = action.payload.id;
            
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    
                    if (movie.id !== id) {
                        // This isn't the item we care about - keep it as-is
                        return movie
                    }
                    return {
                        id: movie.id,
                        title: movie.title,
                        category: movie.category,
                        likes: movie.likes,
                        dislikes: movie.dislikes - 1,
                        lien: movie.lien
                    }
                })
            };
        }
        default:
            return state;
    }
}