import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config object
  apiKey: "AIzaSyDLn5xP2pxG9e5Mvphg53FQzPINLQ-1ngg",
  authDomain: "todo-7952f.firebaseapp.com",
  projectId: "todo-7952f",
  storageBucket: "todo-7952f.firebasestorage.app",
  messagingSenderId: "342170847837",
  appId: "1:342170847837:web:31c4145becdafcf2cf5bb4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
