// Subject.js

/**
 * Kelas Subject berperan sebagai pusat data yang dapat dipantau oleh observer.
 */
class Subject {
  constructor() {
    this._observers = [];
    this._state = 0;
  }

  /**
   * Menambahkan observer ke dalam daftar pemantau.
   * @param {ConcreteObserver} observer - Observer yang ingin dipantau.
   */
  attach(observer) {
    this._observers.push(observer);
  }

  /**
   * Menghapus observer dari daftar pemantau.
   * @param {ConcreteObserver} observer - Observer yang ingin dilepas.
   */
  detach(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  /**
   * Memberi tahu seluruh observer bahwa state telah berubah.
   */
  notify() {
    this._observers.forEach((observer) => observer.update(this));
  }

  /**
   * Mengubah nilai state dan memberi tahu observer.
   * @param {number} newState - Nilai baru dari state.
   */
  setState(newState) {
    this._state = newState;
    this.notify();
  }

  /**
   * Mengambil nilai state saat ini.
   * @returns {number}
   */
  getState() {
    return this._state;
  }
}

module.exports = Subject;
