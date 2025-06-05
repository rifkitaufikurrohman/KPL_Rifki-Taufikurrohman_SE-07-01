# 📦 Aplikasi Modul 15: Registrasi & Login Sederhana

Aplikasi ini dibuat dengan **Node.js** dan menyediakan dua fitur utama: **registrasi** dan **login**. Data user disimpan dalam file `users.json` dengan keamanan hash password menggunakan algoritma **SHA-256**.

---

## 🚀 Fitur Utama

✅ **Registrasi**  
- Validasi **username**:  
  - Hanya boleh huruf alfabet (A-Z, a-z).  
  - Panjang 3-20 karakter.  
- Validasi **password**:  
  - Panjang 8-20 karakter.  
  - Mengandung minimal 1 karakter unik: `!@#$%^&*`.  
  - Tidak boleh mengandung username.

✅ **Login**  
- Username dan password diverifikasi.  
- Password disimpan dalam bentuk hash SHA-256 untuk keamanan.

---

## 📂 Struktur File

├── app.js # File utama aplikasi

├── users.json # File penyimpanan data user (dibuat otomatis)

├── package.json # (Opsional, jika ingin install module tambahan)


---

## 🔧 Cara Menjalankan

1️⃣ **Pastikan Node.js sudah terinstal**  
   Periksa dengan:
   ```bash
   node -v


=== Aplikasi Modul 15 ===
1. Registrasi
2. Login
Pilih menu (1/2): 1
Username: Alice
Password: Alice!123
Registrasi berhasil!


=== Aplikasi Modul 15 ===
1. Registrasi
2. Login
Pilih menu (1/2): 2
Username: Alice
Password: Alice!123
Login berhasil!
