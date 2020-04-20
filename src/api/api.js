import firebase from 'firebase';

export const authAPI = {
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
  }
}

const api = {
  authAPI
}

export default api;