import { authActions } from "./auth-slice";
import firebase from "../../service/firebase";

export const signInWithGoogle = () => {
  return async (dispatch) => {
    dispatch(authActions.loadingStart());
    firebase.auth().onAuthStateChanged((user) => {
      const data = {
        name: user?.displayName,
        photo: user?.photoURL,
      };

      dispatch(authActions.signIn(data));
      dispatch(authActions.loadingFinish());
    });
  };
};
