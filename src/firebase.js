import {initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBTO2P45bS_no1Xv-q4sS5115lYSi6Z0qk",
    authDomain: "react-and-firebase-trail-app.firebaseapp.com",
    projectId: "react-and-firebase-trail-app",
    storageBucket: "react-and-firebase-trail-app.appspot.com",
    messagingSenderId: "95976414087",
    appId: "1:95976414087:web:2fffe209625f454d249122",
    databaseUrl:'https://react-and-firebase-trail-app-default-rtdb.firebaseio.com/'
  };

  export const app=initializeApp(firebaseConfig);