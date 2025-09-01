// app.js
import { db } from './firebase.js';
import { ref, set, get } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// ฟังก์ชันเพิ่มจำนวน Like
async function addLike() {
  const likeRef = ref(db, "likes/count");
  const snapshot = await get(likeRef);

  let currentLikes = 0;
  if (snapshot.exists()) {
    currentLikes = snapshot.val();
  }

  const newLikes = currentLikes + 1;
  await set(likeRef, newLikes);

  // อัปเดตบนหน้าเว็บ
  document.getElementById("like-count").innerText = newLikes;
}

// โหลดจำนวน Like ตอนเปิดหน้า
async function loadLikes() {
  const likeRef = ref(db, "likes/count");
  const snapshot = await get(likeRef);

  if (snapshot.exists()) {
    document.getElementById("like-count").innerText = snapshot.val();
  } else {
    document.getElementById("like-count").innerText = 0;
  }
}

// เริ่มต้นโหลดเมื่อเปิดหน้า
window.onload = function () {
  loadLikes();
  const likeButton = document.getElementById("like-button");
  if (likeButton) {
    likeButton.addEventListener("click", addLike);
  }
};
