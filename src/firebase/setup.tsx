
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCC9H0TGdJUzUTX6tKjfKh-cIsCPMI18D0",
  authDomain: "olx-clone-2878c.firebaseapp.com",
  projectId: "olx-clone-2878c",
  storageBucket: "olx-clone-2878c.firebasestorage.app",
  messagingSenderId: "105088765726",
  appId: "1:105088765726:web:357e76c04d6c37d08d430f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider()