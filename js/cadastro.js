import { app, auth, db } from "./firebaseConfig.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

console.log(app);
console.log(auth);
console.log(db);

// Botão de cadastro
const cadastroButton = document.getElementById('Cadastra');
cadastroButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do botão
  
  // inputs
  const cadastroEmail = document.getElementById('cadastroemail').value;
  const cadastroPwd = document.getElementById('cadastropwd').value;
  const confirmarPwd = document.getElementById('confirmarpwd').value;
  const admin = document.getElementById('admin').checked;
  const novo = document.getElementById('novo').checked;
  const alterar = document.getElementById('alterar').checked;
  const excluir = document.getElementById('excluir').checked;

    console.log(admin);
    console.log(novo);
    console.log(alterar);
    console.log(excluir);
    console.log(cadastroEmail);
    console.log(cadastroPwd);
  // cadastrar novo usuários  
  createUserWithEmailAndPassword(auth, cadastroEmail, cadastroPwd)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

});
