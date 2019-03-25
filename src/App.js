import React, { Component } from 'react';

import Main from './containers/Main';
import Movie from './containers/Movie';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { convertGenres } from './helpers/genres';

const API_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0b5b09d6b2e44b65d6794edea58c807f';

class App extends Component { 

  state = {
    genres: [],
  };

  componentDidMount() {    
    this.fetchGenres();    
  } 

  fetchGenres() {
    fetch(API_GENRES)
      .then(response => response.json())
      .then(response => this.setState({
        genres: convertGenres(response.genres),
        response: response.genres
      }));      
  }

  render() {

    console.log(this.state.genres);
    return (      
      <Router>
        <Switch>
          <Route exact path="/" render={
              (props) => <Main {...props} genres={this.state.genres} /> 
            }
           />
          <Route path="/movie/:id" render={
              (props) => <Movie {...props} genres={this.state.genres} /> 
            } />
        </Switch>
      </Router>
    );
  }
}

export default App;
