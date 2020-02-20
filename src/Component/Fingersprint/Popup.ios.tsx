import React, {Component} from 'react';
import {Alert} from 'react-native';
import FingerprintScanner, {FingerprintScannerError} from 'react-native-fingerprint-scanner';

interface Prop {
    handlePopupDismissed: any,
}

export default class FingerprintPopup extends Component<Prop> {

    componentDidMount() {
        FingerprintScanner
            .authenticate({
                fallbackEnabled: false, onAttempt: function (p1: FingerprintScannerError) {
                }, description: 'Scan your fingerprint on the device scanner to continue'
            })
            .then(() => {
                this.props.handlePopupDismissed();
                this.showAlert('Authentication', 'Authenticated successfully');
            })
            .catch((error: { message: string; }) => {
                this.props.handlePopupDismissed();
                this.showAlert('Authentication', error.message);
            });
    }

    showAlert(title: string, body: string) {
        Alert.alert(
            title, body,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    render() {
        return false;
    }
}
