/**
 * Created by Medinet on 25-01-2017.
 */

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMmou9q4KO-XVjbIKqHPIbkO3RImg_Wg4",
    authDomain: "push-notification-sample-fe79d.firebaseapp.com",
    databaseURL: "https://push-notification-sample-fe79d.firebaseio.com",
    storageBucket: "push-notification-sample-fe79d.appspot.com",
    messagingSenderId: "5898210848"
  };
  firebase.initializeApp(config);


  const messaging = firebase.messaging();
  messaging.requestPermission()
          .then(function() {
              console.log('have permission');
              return messaging.getToken();
          })
      .then(function(token){
          console.log(token);
      })
          .catch(function(err){
              console.log('Error Occured',err);
          })
 window.onload = function() {
     var firebase_heading = document.getElementById('firebase_heading');


     var dbref = firebase.database().ref().child('text');
     dbref.on('value', function (snap) {
         return firebase_heading.innerText = snap.val();
     });
 }
messaging.onMessage(function(payload) {
    console.log('onMessage: ', payload);
});
