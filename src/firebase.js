import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config object

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
