import firebase from "firebase";
import axios from "axios";

export const user = {
  createUserWithEmailAndPassword(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  onAuthStateChanged(user) {
    return firebase.auth().onAuthStateChanged(user);
  },

  signOut() {
    return firebase.auth().signOut();
  },

  signup(data) {
    return axios.post("/signup", data);
  },

  getUserData() {
    return axios.get("/user");
  }
};

const api = {
  user,
};

export default api;
