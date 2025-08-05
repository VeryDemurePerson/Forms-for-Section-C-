import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0-mB65bnfyue_M-7hyOaJP1EptWZsaKg",
  authDomain: "employee-forms-app.firebaseapp.com",
  projectId: "employee-forms-app",
  storageBucket: "employee-forms-app.firebasestorage.app",
  messagingSenderId: "563006447197",
  appId: "1:563006447197:web:1fed8a7429237edd72b7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);
