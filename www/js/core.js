var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyAnj7PINJSyw5HuwTV-_9RBaNpnAJzGlLQ",
            authDomain: "ouch-beta-mobile.firebaseapp.com",
            databaseURL: "https://ouch-beta-mobile.firebaseio.com",
            projectId: "ouch-beta-mobile",
            storageBucket: "ouch-beta-mobile.appspot.com",
            messagingSenderId: "380054382603",
            appId: "1:380054382603:web:8c178d048c771515"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};