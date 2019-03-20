import axios from 'axios';

export function updateMovie(name) { 

    return {
        type: 'UPDATE_MOVIE',
        payload: { name }
        
    };
}

export function searchMovie(name) {
    const url = `https://www.omdbapi.com/?apikey=8730e0e&s=${name}`;
    return {
        type: 'SEARCH_MOVIE',
        payload:
            axios.get(url) 
                .then((res) => {
                    let movieData = res.data;
                    return {movieData}
                })       
    };
}


