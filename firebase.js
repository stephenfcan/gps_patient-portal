import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBe1fYalgySutZMYAfSQ7JQJ5C3Stwfzb0",
    authDomain: "gps-patient-portal.firebaseapp.com",
    projectId: "gps-patient-portal",
    storageBucket: "gps-patient-portal.appspot.com",
    messagingSenderId: "103632282194",
    appId: "1:103632282194:web:262818ac497b02870f758b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };