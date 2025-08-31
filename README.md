# likeNote

ตัวอย่างแอปโน้ตสั้นๆ + ปุ่ม Like (MVP) ใช้ **Firebase Realtime Database** แบบโมดูลผ่าน CDN

## โครงสร้าง
```
index.html
styles.css
firebase.js   // ใส่ค่าคอนฟิก Firebase ของโปรเจคคุณ
app.js
```

## ตั้งค่า Firebase
1. Firebase Console > Project settings > General > Your apps
2. คัดลอกค่าคอนฟิก แล้วแทนใน `firebase.js` (apiKey, projectId, …)
3. Realtime Database > สร้าง DB (test mode ชั่วคราวเพื่อทดสอบ)
4. เปิด `index.html` ด้วยไลฟ์เซิร์ฟเวอร์/โฮสท์ แล้วลองเพิ่มโน้ต/กด Like
