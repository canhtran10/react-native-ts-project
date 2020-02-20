import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View,
    ViewPropTypes,
    Platform,
} from 'react-native';

import FingerprintScanner, {FingerprintScannerError} from 'react-native-fingerprint-scanner';
import styles from './styles';
import ShakingText from './ShakingText';
import {functions} from "react-native-firebase";

// Based on https://github.com/hieuvp/react-native-fingerprint-scanner/blob/master/examples/src/FingerprintPopup.component.android.js
// - this example component supports both the legacy device-specific (Android < v23) and
//   current (Android >= 23) biometric APIs
// - your lib and implementation may not need both

interface Props {
    description: string,
    onAuthenticate: any,
    handlePopupDismissedLegacy: any,
    style?: any,
}

interface State {
    errorMessageLegacy: any,
    biometricLegacy: any
}


class BiometricPopup extends Component<Props, State> {
    private description: null;

    constructor(props: Props) {
        super(props);
        this.state = {
            errorMessageLegacy: undefined,
            biometricLegacy: undefined
        };

        this.description = null;
    }

    componentDidMount() {
        if (this.requiresLegacyAuthentication()) {
            this.authLegacy();
        } else {
            this.authCurrent();
        }
    }

    componentWillUnmount = () => {
        FingerprintScanner.release();
    }

    requiresLegacyAuthentication() {
        return Platform.Version < 23;
    }

    authCurrent() {
        FingerprintScanner
            .authenticate({
                fallbackEnabled: false, onAttempt: function (p1: FingerprintScannerError) {
                }, description: this.props.description || 'Log in with Biometrics'
            })
            .then(() => {
                this.props.onAuthenticate();
                this.showAlert('Authentication', 'Authenticated successfully');
            });
    }

    authLegacy() {
        FingerprintScanner
            .authenticate({onAttempt: this.handleAuthenticationAttemptedLegacy})
            .then(() => {
                this.props.handlePopupDismissedLegacy();
                this.showAlert('Fingerprint Authentication', 'Authenticated successfully');
            })
            .catch((error) => {
                this.setState({errorMessageLegacy: error.message, biometricLegacy: error.biometric});
                // @ts-ignore
                this.description.shake();
            });
    }

    handleAuthenticationAttemptedLegacy = (error: { message: any; }) => {
        this.setState({errorMessageLegacy: error.message});
        if (this.description !== null) {
            // @ts-ignore
            this.description.shake();
        }
    };

    showAlert(title: string, body: string) {
        Alert.alert(
            title, body,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    renderLegacy() {
        const {errorMessageLegacy, biometricLegacy} = this.state;
        const {style, handlePopupDismissedLegacy} = this.props;

        return (
            <View style={styles.container}>
                <View style={[styles.contentContainer, style]}>

                    <Image
                        style={styles.logo}
                        source={require('../../Asset/finger_print.png')}
                    />

                    <Text style={styles.heading}>
                        Biometric{'\n'}Authentication
                    </Text>
                    <ShakingText
                        ref={(instance) => {
                            // @ts-ignore
                            this.description = instance;
                        }}
                        style={styles.description(!!errorMessageLegacy)}>
                        {errorMessageLegacy || `Scan your ${biometricLegacy} on the\ndevice scanner to continue`}
                    </ShakingText>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={handlePopupDismissedLegacy}
                    >
                        <Text style={styles.buttonText}>
                            BACK TO MAIN
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }


    render = () => {
        if (this.requiresLegacyAuthentication()) {
            return this.renderLegacy();
        }

        // current API UI provided by native BiometricPrompt
        return null;
    }
}

export default BiometricPopup;

