// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuGJyerH7Ry_ihR5Rsa8I-vXJMXJLLN2c",
  authDomain: "news-portal-client.firebaseapp.com",
  projectId: "news-portal-client",
  storageBucket: "news-portal-client.appspot.com",
  messagingSenderId: "1020495023943",
  appId: "1:1020495023943:web:663868cb17b1ad82710662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;