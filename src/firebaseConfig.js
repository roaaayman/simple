import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push,get } from 'firebase/database'; // Import necessary Firebase functions

// Your Firebase configuration (replace with your actual Firebase details)
const firebaseConfig = {
  apiKey: "AIzaSyB4QskuSOxf0RfWlLvT2pOj2Gb9jn_urfk",
  authDomain: "simple-form-d958d.firebaseapp.com",
  databaseURL: "https://simple-form-d958d-default-rtdb.firebaseio.com",
  projectId: "simple-form-d958d",
  storageBucket: "simple-form-d958d.firebasestorage.app",
  messagingSenderId: "686162636007",
  appId: "1:686162636007:web:d371e75b7c07b092290642",
  measurementId: "G-X5Z26PMVJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Export necessary Firebase functions
export { db, ref, push ,get};
