import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDAMDNvHf69J6vVTE3zS6DiyZIUMs6Vct8",
    authDomain: "awesomeproject-43813.firebaseapp.com",
    databaseURL: "https://awesomeproject-43813.firebaseio.com",
    storageBucket: "awesomeproject-43813.appspot.com",
    messagingSenderId: "88786821800"
  };

  firebase.initializeApp(config);

export  const firebaseAuth = firebase.auth()
export  const firebaseDatabase = firebase.database()


export default firebase