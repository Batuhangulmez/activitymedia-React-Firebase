import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyByj5es1_iG1TSpsM7Vp9dE7dQgwGoXilo",
    authDomain: "activity-media.firebaseapp.com",
    projectId: "activity-media",
    storageBucket: "activity-media.appspot.com",
    messagingSenderId: "997658591010",
    appId: "1:997658591010:web:3ea02a86f86c11019c6f7b",
    measurementId: "G-CKHS3TBZWP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
