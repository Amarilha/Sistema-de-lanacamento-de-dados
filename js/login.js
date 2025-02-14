import { auth, firestore, doc, getDoc } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Botão de login
const submitButton = document.getElementById('loginbutton');

submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await authenticateUser(userCredential.user);
    } catch (error) {
        console.error("Error during login:", error);
        alert(error.message);
    }
});

async function authenticateUser(user) {
    const userId = user.uid;
    const docRef = doc(firestore, "users", userId);
    
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            console.log(userData);
            redirectUser(userData.admin);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

function redirectUser(isAdmin) {
    const redirectUrl = isAdmin ? 'admin_dashboard.html' : 'user_dashboard.html';
    window.location.href = redirectUrl;
}
