const defaultState = {
    movieDetails: [],

}
export default function DetailReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SEARCH_DETAILS_FULFILLED': {
            const { movieDetails } = action.payload;
            console.log(action.payload)
            return {
                ...state,
                movieDetails: movieDetails,
            };
        }

        default: {
            return state;
        }
    }
}
