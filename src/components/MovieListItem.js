import React from 'react'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const API_IMAGE360_URL = "https://image.tmdb.org/t/p/w500";

const styles = {
    gridListTile: {
        width: 240,
        height: 360,
        marginBottom: 15
    },

    link: {
        display: "block"
    },

    image: {
        width: "100%"
    }
};

export default function MovieListItem({data}) {
    return (
            <GridListTile style={styles.gridListTile}>        
                <Link to={`/movie/${data.id}`} style={styles.link}>
                    <img src={API_IMAGE360_URL + data.poster_path} alt={data.title} style={styles.image} />
                </Link>
                <GridListTileBar
                    title={data.title}
                    subtitle={'Rating: ' + data.vote_average}
                    actionIcon={
                        <IconButton>
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </GridListTile>
    )
}