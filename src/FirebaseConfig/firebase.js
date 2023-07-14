import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDmQ3afthRZWbJlKf9VNWB8rGRd2pQnHeI",
    authDomain: "social-media-project-ddb15.firebaseapp.com",
    projectId: "social-media-project-ddb15",
    storageBucket: "social-media-project-ddb15.appspot.com",
    messagingSenderId: "65559367064",
    appId: "1:65559367064:web:2f96de090b56a3267c6fed",
    measurementId: "G-XGHTNBHWZX"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);