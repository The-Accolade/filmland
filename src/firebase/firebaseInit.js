import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_apiKey,
//   authDomain: process.env.FIREBASE_authDomain,
//   projectId: process.env.FIREBASE_projectId,
//   storageBucket: process.env.FIREBASE_storageBucket,
//   messagingSenderId: process.env.FIREBASE_messagingSenderId,
//   appId: process.env.FIREBASE_appId,
//   measurementId: process.env.FIREBASE_measurementId
// };

const firebaseConfig = {
    apiKey: "AIzaSyBAP0Ssupe-kxRsz7mlrobwSadnmW6432Q",
    authDomain: "filmland-7d62e.firebaseapp.com",
    projectId: "filmland-7d62e",
    storageBucket: "filmland-7d62e.appspot.com",
    messagingSenderId: "716382181672",
    appId: "1:716382181672:web:04b313d6ffc035a278981d",
    measurementId: "G-6KXL9FKWS5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);