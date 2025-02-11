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

// Botão de login
const submitButton = document.getElementById('login-button');
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Autenticar usuário
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuário autenticado com sucesso
      const user = userCredential.user;
      const userId = user.uid;

      // Ler dados do usuário
      const userRef = ref(db, '/users/' + userId);
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log("Dados do usuário:", userData);

            // Verifique se o campo "roler" existe
            const userRole = userData.roler; // Usando o campo "roler"
            if (!userRole) {
              console.error("Campo 'roler' não encontrado nos dados do usuário.");
              return;
            }

            // Redirecionar com base no tipo de usuário
            if (userRole === "admin") {
              window.location.href = "admin_dashboard.html";
            } else if (userRole === "normal") {
              window.location.href = "user_dashboard.html";
            } else {
              console.error("Tipo de usuário desconhecido:", userRole);
            }
          } else {
            console.error("Dados do usuário não encontrados.");
          }
        })
        .catch((error) => {
          console.error("Erro ao ler dados do usuário:", error);
        });
    })
    .catch((error) => {
      // Tratamento de erros de autenticação
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});