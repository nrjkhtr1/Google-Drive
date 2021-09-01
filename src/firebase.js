import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_a57U7RTQePpCK0xjxckLy_QYHFNG9gE",
    authDomain: "drive-clone-live-417b0.firebaseapp.com",
    projectId: "drive-clone-live-417b0",
    storageBucket: "drive-clone-live-417b0.appspot.com",
    messagingSenderId: "1025696014499",
    appId: "1:1025696014499:web:4d575ac99118fd9a2a1f16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }