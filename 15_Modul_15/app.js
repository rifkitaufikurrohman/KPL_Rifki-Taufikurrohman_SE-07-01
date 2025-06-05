// app.js
const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

// File penyimpanan data user
const DATA_FILE = 'users.json';

// Fungsi untuk membaca data user dari file JSON
function readUsers() {
    if (!fs.existsSync(DATA_FILE)) {
        return [];
    }
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
}

// Fungsi untuk menulis data user ke file JSON
function writeUsers(users) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// Fungsi hashing password dengan SHA256
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Validasi username (alfabet ASCII, panjang 3-20)
function validateUsername(username) {
    const asciiOnly = /^[A-Za-z]+$/;
    if (!asciiOnly.test(username)) {
        return 'Username hanya boleh alfabet ASCII.';
    }
    if (username.length < 3 || username.length > 20) {
        return 'Username harus 3-20 karakter.';
    }
    return null;
}

// Validasi password (panjang 8-20, karakter unik, tidak mengandung username)
function validatePassword(password, username) {
    if (password.length < 8 || password.length > 20) {
        return 'Password harus 8-20 karakter.';
    }
    const specialChar = /[!@#$%^&*]/;
    if (!specialChar.test(password)) {
        return 'Password harus mengandung minimal 1 karakter unik (!@#$%^&*).';
    }
    if (password.toLowerCase().includes(username.toLowerCase())) {
        return 'Password tidak boleh mengandung username.';
    }
    return null;
}

// Registrasi user
function register(username, password) {
    const usernameError = validateUsername(username);
    if (usernameError) {
        console.log(`Registrasi gagal: ${usernameError}`);
        return;
    }

    const passwordError = validatePassword(password, username);
    if (passwordError) {
        console.log(`Registrasi gagal: ${passwordError}`);
        return;
    }

    const users = readUsers();
    if (users.find(u => u.username === username)) {
        console.log('Registrasi gagal: Username sudah terdaftar.');
        return;
    }

    const hashed = hashPassword(password);
    users.push({ username, password: hashed });
    writeUsers(users);

    console.log('Registrasi berhasil!');
}

// Login user
function login(username, password) {
    const users = readUsers();
    const hashed = hashPassword(password);
    const user = users.find(u => u.username === username && u.password === hashed);

    if (user) {
        console.log('Login berhasil!');
    } else {
        console.log('Login gagal: Username/password salah.');
    }
}

// CLI sederhana
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n=== Aplikasi Modul 15 ===');
console.log('1. Registrasi');
console.log('2. Login');
rl.question('Pilih menu (1/2): ', (menu) => {
    if (menu === '1') {
        rl.question('Username: ', (username) => {
            rl.question('Password: ', (password) => {
                register(username, password);
                rl.close();
            });
        });
    } else if (menu === '2') {
        rl.question('Username: ', (username) => {
            rl.question('Password: ', (password) => {
                login(username, password);
                rl.close();
            });
        });
    } else {
        console.log('Menu tidak valid.');
        rl.close();
    }
});
