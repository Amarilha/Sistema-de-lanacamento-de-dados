import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyC28JGrAX008bZxSb4-YFkhlmd60U9FKqg",
    authDomain: "sldd-f3e05.firebaseapp.com",
    databaseURL: "https://sldd-f3e05-default-rtdb.firebaseio.com",
    projectId: "sldd-f3e05",
    storageBucket: "sldd-f3e05.firebasestorage.app",
    messagingSenderId: "986200949872",
    appId: "1:986200949872:web:1d8460d3e0981682c7a0b5",
    measurementId: "G-ZZ7FYTYKD0"
  };


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



//submit button
const submitButton = document.getElementById('login-button');
submitButton.addEventListener("click", function(event){
    event.preventDefault()

    //inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "admin_dashboard.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    });