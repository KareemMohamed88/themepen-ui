import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging"
const firebaseConfig = {
    apiKey: "AIzaSyAyUcBb78zLxanp0i9WyaULE0PVvxRQvB0",
    authDomain: "apikey-385705.firebaseapp.com",
    projectId: "apikey-385705",
    storageBucket: "apikey-385705.appspot.com",
    messagingSenderId: "485346189519",
    appId: "1:485346189519:web:32b66de23637a049e2d7ba",
    measurementId: "G-E74V1FG3G8"
};

async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    if (permission === "granted") {
        getToken(messaging, { vapidKey: "BIaNdzzKgC_nfhto2JXBETFgRhZTF3JoLcHUDcZ8M2vycvuOzIpKIHvYsDbzCwxeK41bKUNbR4-PU2O3u20xwC8" })
            .then((currentToken) => {
                if (currentToken) {
                    console.log('currentToken', currentToken)
                } else {
                    console.log("Can't get token")
                }
            })
    } else if (permission === "denied") {
        //notifications are blocked
        alert("You denied for the notification");
    }
}

requestPermission();