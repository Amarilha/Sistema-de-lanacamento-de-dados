import { firestore, getDocs, query, where, doc, deleteDoc,collection } from "./firebaseConfig.js";
export async function excluirUser(user) {
    
    const q = query(collection(firestore,"users"), where("email", "==", user));

    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());

    });
}
