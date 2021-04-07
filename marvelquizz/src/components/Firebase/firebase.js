import app from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCu8ruSCU3--S2Q3YBicCdFInaRhOgwH3I",
  authDomain: "marvel-quizz-app-d0b0b.firebaseapp.com",
  projectId: "marvel-quizz-app-d0b0b",
  storageBucket: "marvel-quizz-app-d0b0b.appspot.com",
  messagingSenderId: "579445073275",
  appId: "1:579445073275:web:675459dd23d58fda7889de"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // Inscription
  signupUser = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password)
  }

  // Connexion
  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password)
  }

  // Deconnexion
  signoutUser = () => this.auth.signOut()
}

export  default Firebase;