 
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
 
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClAbMZjsGxu6nkghCxd9COvujvsmCwQiM",
  authDomain: "components-b85a6.firebaseapp.com",
  projectId: "components-b85a6",
  storageBucket: "components-b85a6.appspot.com",
  messagingSenderId: "530291878894",
  appId: "1:530291878894:web:b08d1e6300fa676cc57cff"
};

 
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
 