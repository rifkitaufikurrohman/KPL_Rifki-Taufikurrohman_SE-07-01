class Orang {
  #nama;

  constructor(nama, usia) {
    this.#nama = nama;
    this.usia = usia;
  }

  perkenalan() {
    return `Hai, nama saya ${this.#nama}, saya berusia ${this.usia} tahun.`;
  }
}

class Karyawan extends Orang {
  constructor(nama, usia, peran, gaji) {
    super(nama, usia);
    this.peran = peran;
    this.gaji = gaji;
  }

  perkenalan() {
    return `${super.perkenalan()} Saya bekerja sebagai ${this.peran} dengan gaji ${this.gaji} per bulan.`;
  }
}

class Manajer extends Karyawan {
  #bonus;

  constructor(nama, usia, gaji, jabatan, bonus) {
    super(nama, usia, "Manajer", gaji);
    this.jabatan = jabatan;
    this.#bonus = bonus;
  }

  perkenalan() {
    return `${super.perkenalan()} Saya adalah ${this.jabatan} dengan total pendapatan ${this.gaji + this.#bonus} per bulan.`;
  }
}

class Departemen {
  constructor(nama, manajer) {
    this.nama = nama;
    this.manajer = manajer;
    this.karyawan = [];
  }

  getInfoDepartemen() {
    return `Departemen ${this.nama} dikelola oleh ${this.manajer} dan memiliki ${this.karyawan.length} karyawan.`;
  }
}

const karyawan1 = new Karyawan("John Doe", 30, "Pengembang", 5000);
console.log(karyawan1.perkenalan());

const manajer1 = new Manajer("Alice Smith", 40, 10000, "Manajer IT", 2000);
console.log(manajer1.perkenalan());

const departemenIT = new Departemen("IT", "Alice Smith");
console.log(departemenIT.getInfoDepartemen());
