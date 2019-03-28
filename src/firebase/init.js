import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBSXm6-GmAftMXKFIi4cU3JLnpeBjI_eVI",
    authDomain: "myproject-bb84e.firebaseapp.com",
    databaseURL: "https://myproject-bb84e.firebaseio.com",
    projectId: "myproject-bb84e",
    storageBucket: "myproject-bb84e.appspot.com",
    messagingSenderId: "3958394199"
};
var fire =firebase.initializeApp(config);

export default fire.firestore()
