import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        searchName: store.search.searchName,
        movieData: store.search.movieData,
        imdbID: store.search.imdbID
    };
};

export default connect(mapStoreToProps)(MovieSearchContainer);