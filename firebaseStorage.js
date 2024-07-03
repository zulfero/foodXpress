// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1pxhnMSHn_3xLaeRxJTv_93bemDb2A-E",
  authDomain: "foodxpress-e8374.firebaseapp.com",
  projectId: "foodxpress-e8374",
  storageBucket: "foodxpress-e8374.appspot.com",
  messagingSenderId: "808048170564",
  appId: "1:808048170564:web:514b76bab709cf1f8d8e11",
  measurementId: "G-66K498DF5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);