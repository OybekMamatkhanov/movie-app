import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';

import MovieListItem from '../components/MovieListItem'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        margin: 10
    }
};

export default class List extends Component {
    
    onScroll = this.onScroll.bind(this);

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        const { innerHeight, scrollY } = window;
        if ((innerHeight + scrollY) >= document.body.offsetHeight) this.props.onDynamicLoading();
    }

    /*onTransition(id) {
        this.props.history.push(`/movie/${id}`);
    }*/

    render() {
        const { populars } = this.props;

        return (
            <GridList cellHeight={180} style={styles.root}>
                {
                    populars.map(popular =>
                        <MovieListItem key={popular.id} data={popular} />
                    )
                }
            </GridList>
        );
    };
}