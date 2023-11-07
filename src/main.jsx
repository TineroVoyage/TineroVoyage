import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDEphv9rg3GHdSjArP5wqcHgg6rAcnDBTE",
//   authDomain: "tinero-voyage.firebaseapp.com",
//   projectId: "tinero-voyage",
//   storageBucket: "tinero-voyage.appspot.com",
//   messagingSenderId: "579654743043",
//   appId: "1:579654743043:web:102133b60565c6f6808a36",
//   measurementId: "G-63Q8DYJJ28",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
