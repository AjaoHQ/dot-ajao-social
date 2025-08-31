import { notesRef, ref, push, onValue, remove, runTransaction } from './firebase.js';

const form = document.getElementById('noteForm');
const input = document.getElementById('noteInput');
const list = document.getElementById('notes');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  await push(notesRef, { text, likes: 0, createdAt: Date.now() });
  input.value = '';
});

onValue(notesRef, (snapshot) => {
  const data = snapshot.val() || {};
  const entries = Object.entries(data).sort((a,b) => b[1].createdAt - a[1].createdAt);
  list.innerHTML = '';
  for (const [id, note] of entries) {
    const li = document.createElement('li');
    li.className = 'note';
    li.innerHTML = `
      <span>${note.text}</span>
      <div class="actions">
        <button class="like">Like <span class="count">(${note.likes || 0})</span></button>
        <button class="del">ลบ</button>
      </div>`;

    li.querySelector('.like').addEventListener('click', () => {
      const likesRef = ref(notesRef, id + '/likes');
      runTransaction(likesRef, (val) => (val || 0) + 1);
    });

    li.querySelector('.del').addEventListener('click', () => {
      remove(ref(notesRef, id));
    });

    list.appendChild(li);
  }
});
