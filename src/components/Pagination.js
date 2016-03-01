import React, { Component, PropTypes } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginatedMovies: [],
      currentPage: 1,
      pages: 1
    }
  }
  componentWillMount() {
    //update state for pagination...
    this.setState({
      page: 1,
      pages: Math.ceil(this.props.data.length / this.props.displayItems)
    });
  }
  renderListMovies() {
    const currentItems = this.props.data.slice(0, this.state.currentPage * this.props.displayItems);
    return currentItems.map((movie) => {
      return (
        <li className='list-group-item' key={movie.Id}>
          <h4>{movie.Title}</h4>
          <p>Rated: {movie.Rating}</p>
          <p>Year: {movie.Year}</p>
        </li>
      );
    })
  }
  goToPage(index) {
    console.log(index);
  }
  renderButtons() {
    let Nav = [];
    for(var i=1; i <= this.state.pages; i++) {
      Nav.push(<li key={i} onClick={this.goToPage.bind(null,i)}><span>{i}</span></li>);
    }
    return (
      <nav>
        <ul className="pagination">
          {Nav}
        </ul>
      </nav>
    );
  }
  render() {
    return(
      <div>
        <ul className='list-group'>
          {this.renderListMovies()}
        </ul>
        {this.renderButtons()}
      </div>
    );
  }
}

Pagination.PropTypes = {
  data: PropTypes.array.isRequired,
  displayItems: PropTypes.number
};

export default Pagination;
