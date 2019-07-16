import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0SvPAMwD1qpK3yJISpH_uNLjgljowd4Q",
    authDomain: "crwn-db-a54f1.firebaseapp.com",
    databaseURL: "https://crwn-db-a54f1.firebaseio.com",
    projectId: "crwn-db-a54f1",
    storageBucket: "",
    messagingSenderId: "286170369671",
    appId: "1:286170369671:web:106bd27ba38160af"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;