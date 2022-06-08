import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWg8h9hjQ3q29jBTgX2ZW3zyOvmYB7nmk",
  authDomain: "adoodlz-9ce97.firebaseapp.com",
  databaseURL: "https://adoodlz-9ce97-default-rtdb.firebaseio.com",
  projectId: "adoodlz-9ce97",
  storageBucket: "adoodlz-9ce97.appspot.com",
  messagingSenderId: "1860931592",
  appId: "1:1860931592:web:6995ffff9c1c2729d0c1bd",
  measurementId: "G-7SCGYTSX8R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);