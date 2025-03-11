const readline = require('readline');

class KodeBuah {
  constructor() {
    this.dataKodeBuah = {
      Apel: 'A00',
      Aprikot: 'B00',
      Alpukat: 'C00',
      Pisang: 'D00',
      Paprika: 'E00',
      Blackberry: 'F00',
      Ceri: 'H00',
      Kelapa: 'I00',
      Jagung: 'J00',
    };
  }

  getKodeBuah(namaBuah) {
    const formattedBuah = namaBuah.charAt(0).toUpperCase() + namaBuah.slice(1).toLowerCase();
    const kode = this.dataKodeBuah[formattedBuah];
    return kode ? kode : 'Kode buah tidak ditemukan';
  }

  listBuah() {
    console.log('\nDaftar Buah dan Kode:');
    for (const [buah, kode] of Object.entries(this.dataKodeBuah)) {
      console.log(`- ${buah}: ${kode}`);
    }
  }
}

const kodeBuah = new KodeBuah();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

kodeBuah.listBuah();

rl.question('\nMasukkan nama buah untuk mencari kode: ', (input) => {
  console.log(`Kode Buah untuk ${input}:`, kodeBuah.getKodeBuah(input));
  rl.close();
});
