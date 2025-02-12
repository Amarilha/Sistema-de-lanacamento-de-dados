import { app, auth, db } from "./firebaseConfig.js";

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

  console.log(cadastroEmail);
  console.log(cadastroPwd);
  console.log(confirmarPwd);

});