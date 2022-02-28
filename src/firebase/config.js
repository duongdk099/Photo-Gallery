import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCXUoznf4Hv9ox2BK-8urA9VPVYbjniNq4",
  authDomain: "chatapp-b7ab4.firebaseapp.com",
  projectId: "chatapp-b7ab4",
  storageBucket: "chatapp-b7ab4.appspot.com",
  messagingSenderId: "772258047454",
  appId: "1:772258047454:web:6c234a1333f07b7d1ea94f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };