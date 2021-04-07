import app from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDjVYuTOjfoCkwa_N7_-kQz3gz9gQs_tvU",
  authDomain: "marvel-quizz-app.firebaseapp.com",
  projectId: "marvel-quizz-app",
  storageBucket: "marvel-quizz-app.appspot.com",
  messagingSenderId: "633894645223",
  appId: "1:633894645223:web:510c662bea52fc37db6142"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // Inscription
  signupUser = (email, password) => {
    return (
      this.auth.createUserWithEmailAndPassword(email, password)
    )
  }

  // Connexion
  loginUser = (email, password) => {
    return (
      this.auth.signInWithEmailAndPassword(email, password)
    )
  }

  // Deconnexion
  signoutUser = () => this.auth.signOut()
}

export  default Firebase;