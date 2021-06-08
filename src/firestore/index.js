import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCa7P7AZqV2CedoCOroU8atZ0WhSLJPY6c",
  authDomain: "shopcloud-c4681.firebaseapp.com",
  projectId: "shopcloud-c4681",
  storageBucket: "shopcloud-c4681.appspot.com",
  messagingSenderId: "838651306857",
  appId: "1:838651306857:web:82394c20bc9a401b9453f8",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  window.location.reload();
}

export function checkAuthState(cb) {
  return auth.onAuthStateChanged(cb);
}

export async function logoutUser() {
  await auth.signOut();
  window.location.reload();
}
