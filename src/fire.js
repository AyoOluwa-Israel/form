import firebase from 'firebase';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4Iq6e6bi3ahZMkuyGa1BMv_QXdumwdCM",
    authDomain: "login-7057c.firebaseapp.com",
    databaseURL: "https://login-7057c.firebaseio.com",
    projectId: "login-7057c",
    storageBucket: "login-7057c.appspot.com",
    messagingSenderId: "528549919029",
    appId: "1:528549919029:web:9c0bad8acf55fab451747c"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;