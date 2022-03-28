import firebase from "firebase/compat/app";
import "firebase/compat/auth";

let firebaseConfig = {
  apiKey: "AIzaSyByvKutqkNRcCBSbx26plOH1cs0KalCTeU",
  authDomain: "blog-app-51c4f.firebaseapp.com",
  databaseURL: "https://blog-app-51c4f-default-rtdb.firebaseio.com",
  projectId: "blog-app-51c4f",
  storageBucket: "blog-app-51c4f.appspot.com",
  messagingSenderId: "914362771328",
  appId: "1:914362771328:web:b28d5eff72ffcb39258365",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
