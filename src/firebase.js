// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXmU1EYuoTK4JB6fNzNdOsbQfniliWk6s",
  authDomain: "blogapp-7203d.firebaseapp.com",
  projectId: "blogapp-7203d",
  storageBucket: "blogapp-7203d.firebasestorage.app",
  messagingSenderId: "583318459423",
  appId: "1:583318459423:web:463713de98112635df712a",
  measurementId: "G-NZTCS9T427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}