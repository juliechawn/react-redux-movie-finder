const defaultState = {
    searchName: '',
    movieData: [],
    imdbID: ''
}

export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_MOVIE': {
            return {
                ...state,
                searchName: payload.name
            };
        }

        case 'SEARCH_MOVIE_FULFILLED': {
            
            const { movieData } = action.payload;
            console.log(action.payload)
            return {
                ...state,
                searchName: '',
                movieData: movieData.Search,
            };
        }

        case 'SEARCH_MOVIE_PENDING': {
            return {
                ...state,
                searchName: '',       
            }
        }
        case 'SEARCH_MOVIE_REJECTED': {
            return {
                ...state,
                searchName: '',

            }
        }

        // case 'SEARCH_DETAILS_FULFILLED': {
        //     const { movieDetails } = action.payload;
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         searchName: '',
        //         movieDetails: movieDetails,
        //     };
        // }

        default: {
            return state;
        }
    }
}
