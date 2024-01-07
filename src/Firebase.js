import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage , ref} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1gmCRMp-l0cElUEDoM8r1TMXhTjIoMKI",
  authDomain: "movie-app-2dc6a.firebaseapp.com",
  projectId: "movie-app-2dc6a",
  storageBucket: "movie-app-2dc6a.appspot.com",
  messagingSenderId: "874524191601",
  appId: "1:874524191601:web:d7f36f7262aae26216a4d0",
};


const app = initializeApp(firebaseConfig)


export const authentication = getAuth(app);

export const storage = getStorage();

export const db = getFirestore();
