import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc, serverTimestamp, query, orderBy, where, getDocs } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI9sSIJSsmzCBZgLIeCdwoYyNi_c_YMZc",
    authDomain: "winner-list.firebaseapp.com",
    projectId: "winner-list",
    storageBucket: "winner-list.appspot.com",
    messagingSenderId: "140760460857",
    appId: "1:140760460857:web:6fc7651ef7551f472967e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db,
    collection,
    onSnapshot,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    query,
    orderBy,
    where
}
