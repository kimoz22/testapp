import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCTQLGBuLdMAM5mn9Zq6fr48mpNKFDzs-4",
  authDomain: "webapp-88fa4.firebaseapp.com",
  databaseURL: "https://webapp-88fa4.firebaseio.com",
  projectId: "webapp-88fa4",
  storageBucket: "webapp-88fa4.appspot.com",
  messagingSenderId: "98538775965",
  appId: "1:98538775965:web:96652dd7e5a2357c4d7b74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 export default firebase;  