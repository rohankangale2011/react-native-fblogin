import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ToolbarAndroid, TouchableNativeFeedback, FlatList, Share } from 'react-native';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this._shareData = this._shareData.bind(this);
        this._renderMovies = this._renderMovies.bind(this);
        this._showSelected = this._showSelected.bind(this);
    }

    _shareData(item) {
        Share.share({
            message: `Movie Name: ${item.name},
                Movie Genre: ${item.genre}`
        },
        {
            dialogTitle: 'Share with'
        });
    }

    _showSelected(item) {
        alert("Selected Item: " + item.name + ". Long press on item to share the selected item data.");
    }

    _renderMovies({item, index}) {
        return <View>
            <TouchableNativeFeedback onPress={() => this._showSelected(item)} onLongPress={() => this._shareData(item)}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemGenre}>{item.genre}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ToolbarAndroid
                    titleColor="#ffffff"
                    style={styles.toolbarContainer}
                    title="ReactNativeApp" />
                <View style={styles.bodyContainer}>
                    <FlatList
                        data={this.props.movieListData}
                        keyExtractor={(item, index) => item.name}
                        renderItem={this._renderMovies}
                        />
                </View>
            </View>
        );
    }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        height: window.height, backgroundColor: '#fff'
    },
    toolbarContainer: {
        width: window.width, height: 60, backgroundColor: '#0097a7'
    },
    bodyContainer: {
        height: window.height - 60, paddingBottom: 25
    },
    itemContainer: {
        minHeight: 70, maxHeight: 70, padding: 10, width: window.width, borderBottomColor: '#eee', borderBottomWidth: 1
    },
    itemName: {
        fontSize: 16, fontWeight: 'bold', color: '#444'
    },
    itemGenre: {

    }
});

export default MainComponent;