import React, { Component } from 'react';
import { Text, View } from 'react-native';
import data from '../../common/data';
import ApiUtils from '../../common/api-utils';
import MainComponent from './main.component';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList : []
        };
    }

    componentDidMount() {
        this._getMovieList();
    }

    _getMovieList() {
        this.setState({ movieList: data.movieList });
    }

    render() {
        return (
            <View>
                <MainComponent movieListData={this.state.movieList}/>
            </View>
        );
    }
}

export default MainContainer;