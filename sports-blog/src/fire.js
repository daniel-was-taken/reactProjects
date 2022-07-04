import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseConfig = {
    apiKey: "AIzaSyCNiAJoHQcl5B7V_koMpVqrCXWMcqfqMz8",
    authDomain: "sportsblog-af084.firebaseapp.com",
    projectId: "sportsblog-af084",
    storageBucket: "sportsblog-af084.appspot.com",
    messagingSenderId: "266211157498",
    appId: "1:266211157498:web:ab55b02128dd63c3e2b043",
    measurementId: "G-W2JZ8W9E2F"
  };

  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);

 export default fire;