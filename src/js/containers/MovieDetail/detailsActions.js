import axios from 'axios';

export function updateMovieDetail(detail){
    return {
        type: 'SEARCH_DETAILS',
        payload:
            axios.get(`https://www.omdbapi.com/?i=${detail}&apikey=8730e0e`) 
                .then((res) => {
                    let movieDetails = res.data;
                    return {movieDetails}
                })       
    };
}


