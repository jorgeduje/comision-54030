
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMsvypX_ijiDqNDKZzEhdbpMjNPQPrT1w",
  authDomain: "comision-54030.firebaseapp.com",
  projectId: "comision-54030",
  storageBucket: "comision-54030.appspot.com",
  messagingSenderId: "649844880760",
  appId: "1:649844880760:web:9ee1b8448768373845848d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )