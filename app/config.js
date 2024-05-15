import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkPynmGr1cr9AxpJwLI_tKkA3vdkBGJdE",
  authDomain: "ovqatlar-33dd4.firebaseapp.com",
  projectId: "ovqatlar-33dd4",
  storageBucket: "ovqatlar-33dd4.appspot.com",
  messagingSenderId: "698093591075",
  appId: "1:698093591075:web:7607a47e5841a329c52f96",
  measurementId: "G-QVWDRV1VE6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)