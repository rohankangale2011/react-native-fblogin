import { ToastAndroid } from 'react-native';

var ApiUtils = {
    getMoviesList: function (data) {
        return fetch('')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movieList;
            })
            .catch((error) => {
                ToastAndroid.show('Error while fetching details. Please try again', ToastAndroid.SHORT);
                return error;
            });
    }
};

export { ApiUtils as default };