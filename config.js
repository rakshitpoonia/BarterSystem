import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDNFfKXcuGEZ23VyAXd2WcrMQV9RghyuZs",
  authDomain: "bartersystem1-81c11.firebaseapp.com",
  databaseURL: "https://bartersystem1-81c11.firebaseio.com",
  projectId: "bartersystem1-81c11",
  storageBucket: "bartersystem1-81c11.appspot.com",
  messagingSenderId: "844069535121",
  appId: "1:844069535121:web:efa9e9f4da8195f0b5ae30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();