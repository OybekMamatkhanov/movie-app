import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const API_IMAGE360_URL = "https://image.tmdb.org/t/p/w500";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        margin: 10
    },
    gridListTile: {
        width: 420,
        height: 240,
        marginBottom: 15
    },
};

export default class MoviesGridList extends Component {

    render() {
        const { populars } = this.props;
        
        return (
            <GridList cellHeight={180} style={styles.root}>
                {
                    populars.map(popular =>
                        <GridListTile key={popular.poster_path} style={styles.gridListTile} >
                            <img src={API_IMAGE360_URL + popular.poster_path} alt={popular.title} />
                            <GridListTileBar
                                title={popular.title}
                                subtitle={'Rating: ' + popular.vote_average}
                                actionIcon={
                                    <IconButton onClick={popular.overview}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    )
                }
            </GridList>
        );
    }
}