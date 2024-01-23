import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_MPey4vuQZ1d81DgLMdGrdxNnJCC1jAA",
  authDomain: "music-playlists-f1e90.firebaseapp.com",
  projectId: "music-playlists-f1e90",
  storageBucket: "music-playlists-f1e90.appspot.com",
  messagingSenderId: "817926664011",
  appId: "1:817926664011:web:3a4ce34e6f5333ff5b02ce",
};

firebase.initializeApp(firebaseConfig);

const proejctFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { proejctFirestore, projectAuth, timestamp };
