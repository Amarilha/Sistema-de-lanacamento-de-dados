import { app, auth, db } from "./firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";



// Botão de login
const submitButton = document.getElementById('loginbutton');
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



