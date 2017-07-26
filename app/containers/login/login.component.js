import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken
} = FBSDK;

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this._fbLogout = this._fbLogout.bind(this);
    }

    _fbLogout() {
        this.props.setLogout({ logout: true });
    }

    render() {
        return (
            <View style={styles.loginMain}>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            var self = this;
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then((data) => {
                                        self.props.onLogin({ loginStatus: true });
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={this._fbLogout}/>
            </View>
        );
    }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    loginMain: {
       // position: 'absolute', top: window.height / 2,  width: window.width, alignItems: 'center', justifyContent: 'center'
    }
});

export default LoginComponent;