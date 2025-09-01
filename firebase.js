// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// ค่าคอนฟิกจาก Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDJgZWPkOCCXX7qvFz4R1uf...",
  authDomain: "likenote-8fccf.firebaseapp.com",
  databaseURL: "https://likenote-8fccf-default-rtdb.firebaseio.com",
  projectId: "likenote-8fccf",
  storageBucket: "likenote-8fccf.appspot.com",
  messagingSenderId: "170796300546",
  appId: "1:170796300546:web:d8280972362dc94edf2a1b"
};

// เริ่มต้นเชื่อมต่อ Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
