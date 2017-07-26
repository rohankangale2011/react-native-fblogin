import React, { Component } from 'react';
import { Text, View, Dimensions, ToastAndroid, StyleSheet } from 'react-native';
import LoginComponent from './login.component';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken
} = FBSDK;

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this._loginNavigation = this._loginNavigation.bind(this);
        this._logoutUser = this._logoutUser.bind(this);
    }

    _loginNavigation(data) {
        if(data.loginStatus) {
            this.props.navigation.navigate('Main');
        }
    }

    _logoutUser() {
        ToastAndroid.show('User logged out from facebook', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textContainer}>Welcome to RNativeApp</Text>
                <LoginComponent onLogin={this._loginNavigation} setLogout={this._logoutUser}/>
            </View>
        );
    }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        height: window.height,
        alignItems: 'center', justifyContent: 'center'
    },
    textContainer: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default LoginContainer;