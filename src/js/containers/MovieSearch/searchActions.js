import axios from 'axios';

export function updateMovie(name) { 

    return {
        type: 'UPDATE_MOVIE',
        payload: { name }
        
    };
}

export function searchMovie(name) {
    const url = `http://www.omdbapi.com/?apikey=8730e0e&s=${name}`;
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

// export function searchDetails(imdbID){
//     const url = `http://www.omdbapi.com/?apikey=8730e0e&i=${imdbID}`;
//     console.log(url);
//     return {
//         type: 'SEARCH_DETAILS',
//         payload:
//             axios.get(url) 
//                 .then((res) => {
//                     let movieDetails = res.data;
//                     return {movieDetails}
//                 })       
//     };
// }



