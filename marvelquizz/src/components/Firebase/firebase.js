import app from 'firebase/app'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCt-BPsASS_NmaL--s380dPZuQsjFa7Q2o",
  authDomain: "marvel-quizz-ff016.firebaseapp.com",
  projectId: "marvel-quizz-ff016",
  storageBucket: "marvel-quizz-ff016.appspot.com",
  messagingSenderId: "302374972654",
  appId: "1:302374972654:web:6a9cdb496f15eda9f497ff"
};

class Firebase {
  constructor() {
    app.initializeApp(config)
  }
}

export  default Firebase;