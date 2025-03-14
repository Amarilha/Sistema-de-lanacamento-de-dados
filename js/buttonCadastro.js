import {registerUser} from "./cadastro.js"
import {excluirUser} from "./excluir.js"

const cadastroButton = document.getElementById('Confirmar');
cadastroButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do botão
  
  // inputs
  const cadastroEmail = document.getElementById('cadastroemail').value;
  const cadastroPwd = document.getElementById('cadastropwd').value;
  const confirmarPwd = document.getElementById('confirmarpwd').value;

  const novo = document.getElementById('novo').checked;
  const alterar = document.getElementById('alterar').checked;
  const excluir = document.getElementById('excluir').checked;

    if (novo) {
        registerUser(cadastroEmail, cadastroPwd,confirmarPwd)
    }
    if (alterar) {
        console.log('Alterando registro.');
    }
    if (excluir) {
        excluirUser(cadastroEmail);
    }
});