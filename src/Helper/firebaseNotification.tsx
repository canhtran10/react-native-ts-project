import {Alert, Platform} from "react-native";
import firebase, {RNFirebase} from "react-native-firebase";
import AsyncStorage from '@react-native-community/async-storage';
import moment from "moment";

export const firebaseNotification = {
    /**
     * platform
     */
    platform() {
        return Platform.OS.toString().toLowerCase();
    },

    /**
     * initChannel
     */
    async initChannel() {
        if(this.platform() === 'android') {
            const channel = new firebase.notifications.Android.Channel('insider', 'insider channel', firebase.notifications.Android.Importance.Max);
            await firebase.notifications().android.createChannel(channel);
        }
    },

    createLocalPushId() {
        return String(moment().valueOf());
    },

    /**
     * setToken
     */
    async setToken() {
        let fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
        return fcmToken;
    },

    /**
     * getToken
     */
    async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            return this.setToken();
        }
        return fcmToken;
    },

    /**
     * checkPermission
     */
    async checkPermission() {
        this.initChannel();
        const enabled = await firebase.messaging().hasPermission();
        if (!enabled) {
            this.requestPermission();
        }
    },

    /**
     * requestPermission
     */
    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            this.setToken();
            return this;
        } catch (error) {
            return false;
        }
    },

    /**
     * Triggered when a particular notification has been received in foreground
     */
    async createNotificationListeners() {
        firebase.notifications().onNotification(async notification => {
            console.log('onNotification', notification)
            // notification.android.setChannelId('insider').setSound('default');
            //Not call this code if you don't want to display push notification
            const localPushId = this.createLocalPushId();
            let _notification = await this.buildNotification(notification, localPushId);
            firebase.notifications().displayNotification(_notification);

            //----------------------------------------------//
            //this.removeDeliveredNotification(localPushId);
            //this.removeAllDeliveredNotifications();
            //----------------------------------------------//
        });
    },

    async createNotificationDisplayListeners() {
        firebase.notifications().onNotificationDisplayed(notification => {
            console.log('createNotificationDisplayListeners', notification);
            const { title, body } = notification;
            // this.showAlert(title, body);
        });
    },

    /**
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    */
    async createNotificationOpenedListeners() {
        firebase.notifications().onNotificationOpened(notification => {
            console.log('createNotificationOpenedListeners', notification);
            const { title, body } = notification.notification;
            console.log("firebase.notifications().onNotificationOpened")
            // this.showAlert(title, body);
        });
    },

    /**
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    */
    async getInitialNotification() {
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            console.log("getInitialNotification", notificationOpen)
            const { title, body } = notificationOpen.notification;
            // this.showAlert(title, body);
        }
    },

    /**
     * Triggered for data only payload in foreground
     */
    async onMessage() {
        firebase.messaging().onMessage((message) => {
            //process data message
            console.log("firebase.messaging().onMessage", JSON.stringify(message));
        });
    },
    async showAlert(title: string, body: string) {
        Alert.alert(
            title, body,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    },

    /**
     * buildNotification
     * @param notification
     * @param localPushId
     */
    async buildNotification(notification: any,  localPushId: string) {
        let { title, body } = notification;

        if(!title) {
            title = "Title message";
        }

        return notification.setNotificationId(localPushId) // Any random ID
            .setTitle(title) // Title of the notification
            .setBody(body) // body of notification
            .android.setPriority(firebase.notifications.Android.Priority.High) // set priority in Android
            .android.setChannelId("reminder") // should be the same when creating channel for Android
            .android.setAutoCancel(true); // To remove notification when tapped on it
    },

    async removeAllDeliveredNotifications() {
        return firebase.notifications().removeAllDeliveredNotifications();
    },
    async removeDeliveredNotification(id: string) {
        return firebase.notifications().removeDeliveredNotification(id);
    }
};
