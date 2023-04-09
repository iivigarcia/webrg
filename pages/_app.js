import "../styles/tailwind.css";
import "../styles/slick.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAdzYcz8-dnKHt_bjQDdTMYRycZvlOzUE",
  authDomain: "rgweb-4c83f.firebaseapp.com",
  projectId: "rgweb-4c83f",
  storageBucket: "rgweb-4c83f.appspot.com",
  messagingSenderId: "855365756516",
  appId: "1:855365756516:web:a68956f37301c5c3772171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
