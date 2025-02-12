import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC28JGrAX008bZxSb4-YFkhlmd60U9FKqg",
    authDomain: "sldd-f3e05.firebaseapp.com",
    databaseURL: "https://sldd-f3e05-default-rtdb.firebaseio.com",
    projectId: "sldd-f3e05",
    storageBucket: "sldd-f3e05.firebasestorage.app",
    messagingSenderId: "986200949872",
    appId: "1:986200949872:web:1d8460d3e0981682c7a0b5",
    measurementId: "G-ZZ7FYTYKD0",
    databaseURL: "https://sldd-f3e05-default-rtdb.firebaseio.com"
  };
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
