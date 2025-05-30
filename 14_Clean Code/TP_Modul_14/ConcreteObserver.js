// ConcreteObserver.js

/**
 * Kelas ConcreteObserver berperan sebagai pemantau perubahan dari Subject.
 */
class ConcreteObserver {
  constructor(name) {
    this._name = name;
  }

  /**
   * Dipanggil ketika Subject mengalami perubahan state.
   * @param {Subject} subject - Objek Subject yang dipantau.
   */
  update(subject) {
    console.log(
      `${this._name} menerima update: State sekarang = ${subject.getState()}`
    );
  }
}

module.exports = ConcreteObserver;
