import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, deleteUser} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getFirestore, doc, setDoc, getDoc, query, where, deleteDoc,collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyC28JGrAX008bZxSb4-YFkhlmd60U9FKqg",
    authDomain: "sldd-f3e05.firebaseapp.com",
    databaseURL: "https://sldd-f3e05-default-rtdb.firebaseio.com",
    projectId: "sldd-f3e05",
    storageBucket: "sldd-f3e05.firebasestorage.app",
    messagingSenderId: "986200949872",
    appId: "1:986200949872:web:1d8460d3e0981682c7a0b5",
    measurementId: "G-ZZ7FYTYKD0",
  };
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);

export { app, auth, db, firestore, 
  doc, setDoc, getDoc, deleteDoc,getAuth, query, where, deleteUser, collection, getDocs};
