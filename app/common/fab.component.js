import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';

export default class FabComponent extends Component {
    constructor(props) {
        super(props);
        this._showModal = this._showModal.bind(this);
    }

    _showModal() {
        this.props.setModalVisibility({ visible: true});
    }

    render() {
        return (
            <TouchableHighlight activeOpacity={1} underlayColor="#45C3AB" style={styles.fabButton} onPress={this._showModal}>
                <Text style={{ paddingTop: 10, paddingLeft: 22, fontSize: 30, fontWeight: 'bold'}}>+</Text>
            </TouchableHighlight>
        );
    }
}

const window = Dimensions.get('window').width;
const styles = StyleSheet.create({
    fabButton: {
        height: 65,
        width: 65,
        borderRadius: 60,
        position: 'absolute',
        bottom: 40,
        right: 10,
        zIndex: 99999,
        backgroundColor: '#00CAFF'
    }
});