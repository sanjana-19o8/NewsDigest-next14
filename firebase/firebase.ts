import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDesaNLZxtpwzQenBIZ8IW1CJjxf0q8jtM",
  authDomain: "news-next-app.firebaseapp.com",
  projectId: "news-next-app",
  storageBucket: "news-next-app.appspot.com",
  messagingSenderId: "304035638545",
  appId: "1:304035638545:web:490b9c981b1b75cb6cb0b0",
  measurementId: "G-LRKT0QQYWQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);