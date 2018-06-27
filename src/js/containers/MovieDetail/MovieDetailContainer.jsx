import React from 'react';

import {
  updateMovieDetail
} from './detailsActions';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.dispatch(updateMovieDetail(`${this.props.match.params.id}`));
  }

  render() {
    const { movieDetails } = this.props;

    return (
      <div>
        <div className='header'>
          <h1 className="display-2 text-center">Movie Details</h1>
        </div>
        <div className="container">
        </div>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2 className="lead">{movieDetails.Title}</h2>
            <h3 className="lead">{movieDetails.Year}</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
       
                <img src={movieDetails.Poster} height="300px" />
                <h5>Actors</h5>
                <p><small>{movieDetails.Actors}</small></p>
              </div>
              <div className="col-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">RATED</th>
                      <th scope="col">RUNTIME</th>
                      <th scope="col">GENRE</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>  
                    <td>{movieDetails.Rated}</td>
                    <td>{movieDetails.Runtime}</td>
                    <td>{movieDetails.Genre}</td>
                  </tr>
                  </tbody>
                </table>
                <h4>Plot</h4>
                <p>{movieDetails.Plot}</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">IMBD RATING</th>
                      <th scope="col">METASCORE</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>  
                    <td>{movieDetails.imdbRating}</td>
                    <td>{movieDetails.Metascore}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer bg-dark text-white">
            <a className="btn btn-dark" href={`#/`}>Go Back</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;