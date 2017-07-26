import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
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
            modalVisible: true
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
        this.state.movieList.push(data.data);
    }

    render() {
        return (
            <View>
                {this.state.modalVisible && (
                    <ModalComponent setModalVisibility={this._setModalVisibility} addNewData={this._addNewMovie}/>
                ) }

                <MainComponent movieListData={this.state.movieList}/>
                <FabComponent setModalVisibility={this._setModalVisibility}/>
            </View>
        );
    }
}

export default MainContainer;