import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAWH7CMTKsNusO6cKE5xZCXITET2zafnsE",
    authDomain: "bartersystem-839b2.firebaseapp.com",
    databaseURL: "https://bartersystem-839b2.firebaseio.com",
    projectId: "bartersystem-839b2",
    storageBucket: "bartersystem-839b2.appspot.com",
    messagingSenderId: "450674227204",
    appId: "1:450674227204:web:b9d8b9bf0d5317305a1d51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();