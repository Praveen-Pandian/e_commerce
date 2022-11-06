import { initializeApp } from "firebase/app"
import "firebase/auth"
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'
import { set,ref ,onValue} from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyD_YHkTLevmPztdw9i4aiKUBjCYbY9YJpI",
  authDomain: "ecommerce-website-ad8ae.firebaseapp.com",
  projectId: "ecommerce-website-ad8ae",
  storageBucket: "ecommerce-website-ad8ae.appspot.com",
  messagingSenderId: "250505740416",
  appId: "1:250505740416:web:e9d09c839c7b8455f7a665",
  measurementId: "G-PC5FYYJZ6N"
})
export const db = getDatabase(app)
export const auth = getAuth(app)
export const dref = ref(db, "categories");
export default app 