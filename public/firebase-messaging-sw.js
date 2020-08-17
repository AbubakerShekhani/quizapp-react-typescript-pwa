importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

const config = {
  apiKey: "AIzaSyCCB6JnOSyc52tx2k2MrD2Sxb_EN83wxxI",
    authDomain: "quiz-app-7f1e9.firebaseapp.com",
    databaseURL: "https://quiz-app-7f1e9.firebaseio.com",
    projectId: "quiz-app-7f1e9",
    storageBucket: "quiz-app-7f1e9.appspot.com",
    messagingSenderId: "237023696956",
    appId: "1:237023696956:web:fad743a3e8bdd0ce448b39"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});