import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Modal, TouchableNativeFeedback, TextInput, Picker, ToastAndroid } from 'react-native';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: ''
        };
        this._addNewMovieDetails = this._addNewMovieDetails.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    _addNewMovieDetails() {
        if(this.state.name === '' || this.state.genre === '') {
            ToastAndroid.show('Please add the details.', ToastAndroid.SHORT);
        } else {
            this.props.setModalVisibility({ visible: false });
            this.props.addNewData({ data: this.state});
        }
    }

    _closeModal() {
        this.props.setModalVisibility({ visible: false });
    }

    render() {
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    onRequestClose={() => { alert("Modal has been closed.") } }
                    >
                    <View style={{ padding: 20, position: 'relative', height: window.height }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 10, color: '#444' }}>Add Movie Details</Text>
                        <View style={styles.itemContainer}>
                            <Text style={styles.label}>Movie Name</Text>
                            <TextInput
                                style={{ height: 50, margin: 0, padding: 10 }}
                                placeholder="Enter movie name"
                                onChangeText={(text) => this.setState({ name: text})}
                                />
                        </View>
                        <View style={styles.itemContainer}>
                            <Text style={styles.label}>Movie Genre</Text>
                            <Picker
                                selectedValue={this.state.genre}
                                onValueChange={(itemValue, itemIndex) => this.setState({ genre: itemValue }) }>
                                <Picker.Item label="Select genre" value="" />
                                <Picker.Item label="Comedy" value="Comedy" />
                                <Picker.Item label="Horror" value="Horror" />
                                <Picker.Item label="Thriller" value="Thriller" />
                                <Picker.Item label="Animation" value="Animation" />
                                <Picker.Item label="Bollywood" value="Bollywood" />
                                <Picker.Item label="Drama" value="Drama" />
                                <Picker.Item label="Historical" value="Historical" />
                            </Picker>
                        </View>
                        <View style={{ position: 'absolute', bottom: 50, width: window.width - 40, marginLeft: 20, marginRight: 20 }}>
                            <TouchableNativeFeedback onPress={this._addNewMovieDetails}>
                                <View style={styles.addButton}>
                                    <Text style={styles.addBtnText}>Add</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this._closeModal}>
                                <View style={styles.cancelButton}>
                                    <Text style={styles.cancelBtnText}>Cancel</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    itemContainer: {
        paddingTop: 20
    },
    label: {
        fontWeight: 'bold',
        paddingLeft: 10
    },
    addButton: {
        backgroundColor: '#26a69a', alignItems: 'center', padding: 10, borderRadius: 2
    },
    addBtnText: {
        color: '#fff'
    },
    cancelButton: {
        alignItems: 'center', padding: 10, borderRadius: 2, marginTop: 10, borderColor: '#26a69a', borderWidth: 1
    }
});

export default ModalComponent;