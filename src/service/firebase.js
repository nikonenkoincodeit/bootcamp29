import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseConfig } from "../config/firebase-config";
import { getDatabase, push, ref, onValue } from "firebase/database";

import { updateStatusBtn, toggleChat } from "../index";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase();

export const userAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("user :>> ", user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error :>> ", error);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

onAuthStateChanged(auth, (user) => {
  updateStatusBtn(user);
  toggleChat(user);
  console.log("user :>> ", user);
});

export function writeUserData(message = {}) {
  push(ref(db, "message"), message);
}

onValue(ref(db, "message"), (snapshot) => {
  const data = snapshot.val();
  console.log("data :>> ", data);
});
