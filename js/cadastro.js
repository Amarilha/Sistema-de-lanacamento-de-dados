import { app, auth,firestore  } from "./firebaseConfig.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';




export function registerUser(cadastroEmail, cadastroPwd, confirmarPwd) {
  const admin = document.getElementById('admin').checked;
  console.log (cadastroEmail, cadastroPwd, confirmarPwd);
  // cadastrar novo usuários  

  createUserWithEmailAndPassword(auth, cadastroEmail, cadastroPwd)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    const userId = user.uid;
    setDoc(doc(firestore, "users", userId), {
      email: cadastroEmail,
      admin: admin,
    });


    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


};
