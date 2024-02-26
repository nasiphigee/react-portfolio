// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3PHVvjZdyn_ishq_e-e_iY89RkngBzPQ",
  authDomain: "nasiphi-ngcobozi-react-portf.firebaseapp.com",
  projectId: "nasiphi-ngcobozi-react-portf",
  storageBucket: "nasiphi-ngcobozi-react-portf.appspot.com",
  messagingSenderId: "339504460514",
  appId: "1:339504460514:web:4500e1b7999d67277464bb",
  measurementId: "G-NXFY3L78HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);