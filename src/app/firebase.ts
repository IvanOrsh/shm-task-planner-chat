import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC233-GwiZppBzbIdzLdAfQwXIKpOKTl-w",
  authDomain: "shm-task-planner-chat.firebaseapp.com",
  databaseURL:
    "https://shm-task-planner-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shm-task-planner-chat",
  storageBucket: "shm-task-planner-chat.appspot.com",
  messagingSenderId: "322129157679",
  appId: "1:322129157679:web:7838ba5f7228657f1b70da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
