// PusatDataSingleton.js

/**
 * Singleton class untuk menyimpan dan mengelola data bersama.
 */
class PusatDataSingleton {
  constructor() {
    // Cek apakah instance sudah ada, jika ya kembalikan instance yang sama
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }

    // Inisialisasi array penyimpanan data
    this.dataTersimpan = [];

    // Simpan instance agar hanya ada satu
    PusatDataSingleton._instance = this;
  }

  /**
   * Mengembalikan instance tunggal dari PusatDataSingleton.
   * @returns {PusatDataSingleton}
   */
  static getInstance() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  /**
   * Mengambil seluruh data yang tersimpan.
   * @returns {Array}
   */
  getSemuaData() {
    return this.dataTersimpan;
  }

  /**
   * Menampilkan seluruh data ke konsol.
   */
  printSemuaData() {
    console.log("Isi Data:");
    this.dataTersimpan.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  /**
   * Menambahkan sebuah data ke dalam penyimpanan.
   * @param {string} input - Data yang akan ditambahkan.
   */
  tambahData(input) {
    this.dataTersimpan.push(input);
  }

  /**
   * Menghapus sebuah data berdasarkan index.
   * @param {number} index - Index dari data yang akan dihapus.
   */
  hapusData(index) {
    if (index >= 0 && index < this.dataTersimpan.length) {
      this.dataTersimpan.splice(index, 1);
    } else {
      console.log("Index tidak valid.");
    }
  }
}

module.exports = PusatDataSingleton;
