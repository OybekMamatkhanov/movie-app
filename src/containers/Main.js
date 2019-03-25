import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import List from '../components/List';

const getPopularMovies = page => `https://api.themoviedb.org/3/movie/popular?api_key=0b5b09d6b2e44b65d6794edea58c807f&language=en-US&page=${page}`;

class Main extends Component {
  state = {
    popularMovies: [],
    genres: [],
    page: 1
  };

  onDynamicLoading = this.onDynamicLoading.bind(this);
  fetchPopularMovies = this.fetchPopularMovies.bind(this);

  componentDidMount() {    
    this.fetchPopularMovies(this.state.page);    
  }  

  onDynamicLoading() {
    this.fetchPopularMovies(this.state.page + 1);
  }

  fetchPopularMovies(page) {
    fetch(getPopularMovies(page))
      .then(response => response.json())
      .then(response => this.setState({
        popularMovies: [...this.state.popularMovies, ...response.results],
        page
      }));
  }

  render() {
   const { genres } = this.props;
    return (
        <div className="App">
          <NavBar
            genres={genres}
          />
          
          <List 
            populars={this.state.popularMovies}
            page={this.state.page}
            onDynamicLoading={this.onDynamicLoading}
            history={this.props.history}
            
          />
        </div>
    );
  }
}

export default Main;
