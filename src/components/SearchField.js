import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import { mapGenres } from '../helpers/genres';


const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=0b5b09d6b2e44b65d6794edea58c807f&query=';
const API_IMAGE360_URL = "https://image.tmdb.org/t/p/w92";

const styles = {
    wrapper: {
        margin: "0 auto",
        position: "relative",
        width: 400
    },
    papper: {
        position: "absolute",
        zIndex: "1",
        width: "auto"
    },
    imgSize: {
        width: 42,
        height: 50
    },
    searchMoviePoster: {
        marginRight: 18
    }
};

class SearchField extends Component {
    state = {
        value: "",
        results: []
    };

    handleChange = this.handleChange.bind(this);    

    componentDidMount() {

    }


    renderItems() {
        let { results } = this.state;
        let { genres } = this.props;

        if (results.length) {
            return (
                <Paper open={Boolean(results.length)} style={styles.papper}>
                    {results.slice(0, 9).map((item, index) => (
                        <MenuItem
                            key={index}
                            component="div"
                            onClick={() => { this.props.history.push(`/movie/${item.id}`)}}
                           
                        >
                            <div style={styles.searchMoviePoster}>
                                <img src={API_IMAGE360_URL + item.poster_path} alt={item.title} style={styles.imgSize} />
                            </div>
                            <div>
                                <strong>{item.title}</strong>
                                <div>{mapGenres(genres, item.genre_ids, ", ")}</div>
                            </div>
                        </MenuItem>
                    ))}
                </Paper>
            )
        }
    }

    handleChange(e) {
        const { value } = e.target;

        this.setState({ value });

        if (value) {
            fetch(API_SEARCH_URL + value)
                .then(response => response.json())
                .then(data => {
                    this.setState({ results: data.results });
                });
        } else {
            this.setState({ results: [] });
        }
    }

    render() {
        const { value } = this.state;

        return (
            <div style={styles.wrapper}>
                <TextField
                    inputRef={el => this.text = el}
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    autoComplete="off"
                    value={value}
                    onChange={this.handleChange}
                    fullWidth
                />
                {this.renderItems()}
            </div>
        );
    }
}

export default withRouter(SearchField)