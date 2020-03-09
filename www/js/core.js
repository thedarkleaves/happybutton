function printdebug(content) {
  $("#debug").append("<br>"+content);
}

function startLogin() {
  printdebug("the login function has been called.");      
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      
  // start login
  email = "simonscheck@live.com";
  password = "test";
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    printdebug("Auth Error: " + errorCode + " " + errorMessage);
  });
  printdebug("perhaps created user");
  
  /* google sign in - doesn't work
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    printdebug("Auth Error: " + errorCode + " " + errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  }); */

}

var app = {
    // Application Constructor
    initialize: function() {
      // initialise cordova bits
      
      printdebug("initialising");
      this.bindEvents(); 
    
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
      printdebug("loading firebase");
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyB-ktTchK_mD2PYpHu8E01ruyyzoupy8KU",
        authDomain: "happy-button-86879.firebaseapp.com",
        databaseURL: "https://happy-button-86879.firebaseio.com",
        projectId: "happy-button-86879",
        storageBucket: "happy-button-86879.appspot.com",
        messagingSenderId: "155468487530",
        appId: "1:155468487530:web:f3456a8832f43742c0a313"
      };
            
      printdebug("intialising happy button");
      // custom bits 
      $("#happybutton").on("tap click",function(){
        newcolour = "#" + Math.floor(Math.random()*1000000);
        $('body').css("background-color",newcolour);
        startLogin();
      });

      printdebug("ready");
    },
};


