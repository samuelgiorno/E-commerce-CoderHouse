//import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDqeMmWuNgBtrfOgoBmAqpEKT5aLbR58mo",
  authDomain: "proyectocoder-333123.firebaseapp.com",
  projectId: "proyectocoder-333123",
  storageBucket: "proyectocoder-333123.appspot.com",
  messagingSenderId: "888647346486",
  appId: "1:888647346486:web:59e58f132a2209aaeeab97",
  measurementId: "G-QGL6W4VRG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)