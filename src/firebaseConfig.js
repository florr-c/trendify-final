import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsr7dmbXIu96noD8aM2CIh5oQ8nqrB7YM",
  authDomain: "trendify-bddcb.firebaseapp.com",
  projectId: "trendify-bddcb",
  storageBucket: "trendify-bddcb.firebasestorage.app",
  messagingSenderId: "850849691529",
  appId: "1:850849691529:web:7ffd9739aae4a331e0d358",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
};
