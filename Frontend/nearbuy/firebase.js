
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDsSBIYFEKVK8Lrqsn-SkEbd5y9j7mKdw",
  authDomain: "nearbuy-clone.firebaseapp.com",
  projectId: "nearbuy-clone",
  storageBucket: "nearbuy-clone.appspot.com",
  messagingSenderId: "38132118116",
  appId: "1:38132118116:web:a11e7716a706ca602f2571",
  measurementId: "G-7Y01QL54SV"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth}