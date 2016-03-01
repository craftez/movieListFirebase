import React, { Component } from 'react';
import Movies from '../movies';
import Pagination from './Pagination';

class ListMovies extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      displayItems: 4
    };
  }

  componentWillMount () {
    this.setState({
      movies: Movies
    });
  }

  render () {
    return (
      <div>
        <h1>MovieList</h1>
        <Pagination data={this.state.movies} displayItems={this.state.displayItems} />
      </div>
    );
  }
}

export default ListMovies;
