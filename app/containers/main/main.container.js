import React, { Component } from 'react';
import { Text, View, Dimensions, ActivityIndicator } from 'react-native';
import data from '../../common/data';
import ApiUtils from '../../common/api-utils';
import FabComponent from '../../common/fab.component';
import ModalComponent from '../../common/modal';
import MainComponent from './main.component';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            modalVisible: false,
            showLoader: false
        };
        this._setModalVisibility = this._setModalVisibility.bind(this);
        this._addNewMovie = this._addNewMovie.bind(this);
    }

    componentDidMount() {
        this._getMovieList();
    }

    _getMovieList() {
        this.setState({ movieList: data.movieList });
    }

    _setModalVisibility(data) {
        this.setState({ modalVisible: data.visible });
    }

    _addNewMovie(data) {
        var self = this;
        self.setState({ showLoader: true });
        setTimeout(function() {
            self.state.movieList.push(data.data);
            self.setState({ showLoader: false });
        }, 3000);
    }

    render() {
        return (
            <View>
                {this.state.modalVisible && (
                    <ModalComponent setModalVisibility={this._setModalVisibility} addNewData={this._addNewMovie}/>
                ) }
                {this.state.showLoader && (
                    <ActivityIndicator animating={this.state.showLoader} color="#fff" size="large" style={{ position: 'absolute', width: window.width, height: window.height, backgroundColor: '#333', zIndex: 999999999, opacity: 0.5}}/>
                )}
                <MainComponent movieListData={this.state.movieList}/>
                <FabComponent setModalVisibility={this._setModalVisibility}/>
            </View>
        );
    }
}

const window = Dimensions.get('window');
export default MainContainer;