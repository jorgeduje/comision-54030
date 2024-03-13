
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_PROJECT ,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId:import.meta.env.VITE_MESSAGIN ,
  appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )