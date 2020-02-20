import TouchID from 'react-native-touch-id';

export const TouchIDAuthenticate = {
    optionalConfig() {
        //config is optional to be passed in on Android
        return {
            title: 'Authentication Required', // Android
            imageColor: '#e00606', // Android
            imageErrorColor: '#ff0000', // Android
            sensorDescription: 'Touch sensor', // Android
            sensorErrorDescription: 'Failed', // Android
            cancelText: 'Cancel', // Android
            fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
            unifiedErrors: false, // use unified error messages (default false)
            passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
        };
    },

    authHandler(optionalConfigObject: any) {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
            .then((success: any) => {
                //Authenticated Successfully
                console.log('Successfully:', success);
            })
            .catch((error: any) => {
                //Authentication Failed
                console.log('Failed:', error);
            });
    },

    clickHandler() {
        TouchID.isSupported()
            .then(biometryType => {
                // Success code
                if (biometryType === 'FaceID') {
                    console.log('FaceID is supported.');
                } else if (biometryType === 'TouchID') {
                    console.log('TouchID is supported.');
                } else if (biometryType === true) {
                    // Touch ID is supported on Android
                }
            })
            .catch(error => {
                // Failure code if the user's device does not have touchID or faceID enabled
                console.log(error);
            });
    }
};
