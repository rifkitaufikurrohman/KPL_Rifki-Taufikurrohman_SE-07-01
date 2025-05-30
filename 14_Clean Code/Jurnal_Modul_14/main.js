// main.js

const PusatDataSingleton = require("./PusatDataSingleton");

// Ambil instance dari singleton
const dataPertama = PusatDataSingleton.getInstance();
const dataKedua = PusatDataSingleton.getInstance();

// Tambahkan data melalui instance pertama
dataPertama.tambahData("Nama Anggota 1");
dataPertama.tambahData("Nama Anggota 2");
dataPertama.tambahData("Nama Asisten Praktikum");

// Cetak data dari instance kedua
console.log("\nCetak dari dataKedua:");
dataKedua.printSemuaData();

// Hapus data terakhir dari instance kedua
dataKedua.hapusData(2);

// Cetak hasil setelah penghapusan melalui instance pertama
console.log("\nSetelah penghapusan (dari dataPertama):");
dataPertama.printSemuaData();

// Tampilkan jumlah data di kedua instance
console.log("\nJumlah data:");
console.log("DataPertama count:", dataPertama.getSemuaData().length);
console.log("DataKedua count:", dataKedua.getSemuaData().length);
