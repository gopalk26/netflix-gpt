// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvVA3yn29R0t7yw7qv3M40fwvUC417G6A",
  authDomain: "netflix-gpt-6c484.firebaseapp.com",
  projectId: "netflix-gpt-6c484",
  storageBucket: "netflix-gpt-6c484.appspot.com",
  messagingSenderId: "191728168563",
  appId: "1:191728168563:web:2395b4bfe6e03cbf47c406",
  measurementId: "G-E62LTYGWJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
