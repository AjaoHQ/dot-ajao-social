// Replace the config values below with your Firebase project's configuration.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, runTransaction } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const notesRef = ref(db, "likeNote/notes");
export { ref, push, onValue, remove, runTransaction };
