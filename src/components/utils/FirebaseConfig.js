
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ88UxZkVXGtCKUtUyCWS6oAjp4xIbUhg",
  authDomain: "clonas-shop.firebaseapp.com",
  projectId: "clonas-shop",
  storageBucket: "clonas-shop.appspot.com",
  messagingSenderId: "908284976457",
  appId: "1:908284976457:web:6cb5278f31c78e9b514e98",
  measurementId: "G-5DDPYPL989"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


