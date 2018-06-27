import React from 'react';

import {
  updateMovie,
  searchMovie,
  // searchDetails
} from './searchActions';

export default class movieSearch extends React.Component {
  constructor(props) {
    super(props)

    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
    // this.handleDetailSearch = this.handleDetailSearch.bind(this);
  }

  handleMovieInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovie(value));
  }

  handleMovieSearch(event) {
    event.preventDefault(); 
    const { dispatch, searchName } = this.props;
    dispatch(searchMovie(searchName));
  }

  // handleDetailSearch(event) {
  //   const { dispatch } = this.props;
  //   const { value } = event.target;
  //   dispatch(searchDetails(value));
  // }


  render() {
    const { searchName, movieData, imdbID } = this.props;

    return (
      <div>
      <form>
        <div className='header'>
          <h1 className="display-2 text-center">Movie Finder</h1>
          <div className="input-group mb-3">
            <input type="text"
              className="form-control"
              id='movie-input'
              value={searchName}
              ref='input'
              placeholder="Enter movie"
              onChange={this.handleMovieInput} />
            <div className="input-group-append">
              <button className="btn btn-outline-dark"
                type="submit"
                onClick={this.handleMovieSearch}> Go!</button>
            </div>
          </div>
        </div>
      </form>
    
      <div className="container">
      <div className="row"> 
      { movieData.map((movieData, index) => (
         <div className="col-sm-auto">
        <div className="card">
              <div className="card-header bg-dark text-white">
                <h2 className="lead">{movieData.Title}</h2>
                <h3 className="lead">{movieData.Year}</h3>
              </div>

              <div className="card-body" >
                <img src={movieData.Poster} height="300px"/> 
             </div>

              <div className="card-footer bg-dark text-white">
                <a  href={`#/movie/${movieData.imdbID}`} className="btn btn-dark" >Click For More Details</a>
              </div>
           </div>
           </div>
        ))}
       </div>
       
        </div>
      
      </div>
    );
  }
}