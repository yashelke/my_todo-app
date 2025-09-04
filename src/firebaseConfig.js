import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // 👈 add this line
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWTAmDul5lgH3sJzfEf7TLHPxfUvb-PSQ",
  authDomain: "todo-app-67336.firebaseapp.com",
  projectId: "todo-app-67336",
  storageBucket: "todo-app-67336.firebasestorage.app",
  messagingSenderId: "300588641019",
  appId: "1:300588641019:web:c85a87c8f012a1e9511e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Authentication instance
export const auth = getAuth(app);
// export const db = getFirestore(app);