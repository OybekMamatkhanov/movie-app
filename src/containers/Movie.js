import React, { Component } from 'react';
import MovieDetails from '../components/MovieDetails';

const getApiMovieDetailsUrl = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=0b5b09d6b2e44b65d6794edea58c807f`;


export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieDetails: {},
        };
    }

    componentDidMount() {
        fetch(getApiMovieDetailsUrl(this.props.match.params.id))
            .then(response => response.json())
            .then(data => this.setState({
                movieDetails: data
            }));
    }

    render() {
        let { movieDetails } = this.state;
        const { genres } = this.props;

        console.log(movieDetails)
        return (
            <div>
                <MovieDetails data={movieDetails} genres={genres} />
            </div>
        );
    }
}