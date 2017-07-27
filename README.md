# React Native facebook login + Sharing application data using various native features
Facebook login component using react native + Flatlist example

A basic example showing the facebook login using react-native application. Run <strong>npm install</strong> on the root directory and follow <a href="https://github.com/facebook/react-native-fbsdk">THIS</a> link to setup facebook login in your react native application. Although, you need to do some changes while doing the setup.
1. As per setup, you need to install and link <strong>react-native-fbsdk</strong>. So instead of react-native install react-native-fbsdk, you should do <strong>npm install react-native-fbsdk@0.6.0 --save</strong>
2. After installing, you should link it: <strong>react-native link react-native-fbsdk</strong>
3. after successfull linking, you have to change the react-native-fbdsk's buidl.gradle file(change the facebook android sdk version as it causes issue while building/running the app on emulator). Update compile('com.facebook.android:facebook-android-sdk:4.+') to <strong>compile('com.facebook.android:facebook-android-sdk:4.22.1')</strong>

<strong>Note:</strong> You should follow all the steps from the provided link above.

Successfull login will redirect user to another view/screen, displaying a list of data.

Data been displayed using <a href="https://facebook.github.io/react-native/docs/flatlist.html">FlatList</a>
List been provided with two events:
1. click(onPress): Will display the selected item(movie name)
2. long press(onLongPress): Will open up a dialog for sharing the movie details with various available native features(facebook, whatsApp, skype etc).

<strong>Note:</strong> The features are the ones installed on your device.
