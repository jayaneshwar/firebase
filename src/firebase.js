import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD18en9uZ74vWkZq5dLqThKn2QEPHkGjAQ",
  authDomain: "crud-1942a.firebaseapp.com",
  projectId: "crud-1942a",
  storageBucket: "crud-1942a.appspot.com",
  messagingSenderId: "849246794917",
  appId: "1:849246794917:web:18ecf37a556a669939094c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)