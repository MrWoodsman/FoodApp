// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA71QuzTtYpfSDqzFHLshI6wUGQ8LpJseI",
  authDomain: "myapp-44c66.firebaseapp.com",
  databaseURL: "https://myapp-44c66-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myapp-44c66",
  storageBucket: "myapp-44c66.appspot.com",
  messagingSenderId: "359396357809",
  appId: "1:359396357809:web:c1690eb1d56dd5041d9490",
  measurementId: "G-GJNX177MC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);