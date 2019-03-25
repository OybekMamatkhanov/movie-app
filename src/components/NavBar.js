import React, {Component} from 'react';
import SearchField from './SearchField';

export default class extends Component {
    render() {
        return (
            <div id="nav-bar">
                <SearchField 
                    genres={this.props.genres}
                />
            </div>
        );
    }
}