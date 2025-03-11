const readline = require('readline');

class KodePos {
  constructor() {
    this.dataKodePos = {
      Batununggal: 40266,
      Kujangsari: 40287,
      Mengger: 40267,
      Wates: 40256,
      Cijaura: 40287,
      Jatisari: 40286,
      Margasari: 40286,
      Sekejati: 40286,
      Kebonwaru: 40272,
      Maleer: 40274,
      Samoja: 40273,
    };
  }

  getKodePos(kelurahan) {
    const formattedKelurahan = kelurahan.charAt(0).toUpperCase() + kelurahan.slice(1).toLowerCase();
    const kodePos = this.dataKodePos[formattedKelurahan];
    return kodePos ? kodePos : "Kode pos tidak ditemukan";
  }

  listKelurahan() {
    console.log("Daftar Kelurahan");
    for(const kelurahan in this.dataKodePos) {
      console.log(`- ${kelurahan}`);
    }
  }
}

const kodePos = new KodePos();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

kodePos.listKelurahan();

rl.question('\nMasukkan nama kelurahan untuk mencari kode pos: ', (input) => {
  console.log(`Kode Pos ${input}:`, kodePos.getKodePos(input));
  rl.close();
});