import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyB5LUSLN9SxVJLOvlXSAwpw0k1BNMhfem4",
    authDomain: "test-auth-9468a.firebaseapp.com",
    databaseURL: "https://test-auth-9468a-default-rtdb.firebaseio.com",
    projectId: "test-auth-9468a",
    storageBucket: "test-auth-9468a.appspot.com",
    messagingSenderId: "941542964311",
    appId: "1:941542964311:web:2f1233a7af2a5a9b083712"
};
initializeApp(firebaseConfig);

const db = getFirestore()

const colRef = collection(db, 'tasks')

getDocs(colRef)
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {

            console.log(doc.data(), doc.id)
        });
    })