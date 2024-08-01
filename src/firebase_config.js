import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFQohl8MlsiWhFndZKs12oPP75yNrNSJ8",
  authDomain: "blooddonation-ae848.firebaseapp.com",
  projectId: "blooddonation-ae848",
  storageBucket: "blooddonation-ae848.appspot.com",
  messagingSenderId: "1060080949341",
  appId: "1:1060080949341:web:72be84a245cd28412915b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);
export { app, db, storage };
