class PosisiKarakterGame {
  constructor(NIM) {
    this.state = 'Berdiri';
    this.NIM = NIM;
    this.modulus = NIM % 3;
    this.showState();
  }

  changeState(action) {
    const transitions = {
      Berdiri: { TombolW: 'Terbang', TombolS: 'Jongkok' },
      Jongkok: { TombolW: 'Berdiri', TombolS: 'Tengkurap' },
      Tengkurap: { TombolW: 'Jongkok' },
      Terbang: { TombolS: 'Berdiri' },
    };

    const nextState = transitions[this.state]?.[action];
    if (nextState) {
      this.handleSpecialOutput(this.state, nextState, action);
      this.state = nextState;
      this.showState();
    } else {
      console.log('Aksi tidak valid');
    }
  }

  handleSpecialOutput(prevState, nextState, action) {
    if (this.modulus === 0) {
      if (action === 'TombolS') console.log('Tombol arah bawah ditekan');
      if (action === 'TombolW') console.log('Tombol arah atas ditekan');
    } else if (this.modulus === 1) {
      if (nextState === 'Berdiri') console.log('Posisi standby');
      if (nextState === 'Tengkurap') console.log('Posisi istirahat');
    } else if (this.modulus === 2) {
      if (prevState === 'Terbang' && nextState === 'Jongkok') console.log('Posisi landing');
      if (prevState === 'Berdiri' && nextState === 'Terbang') console.log('Posisi take off');
    }
  }

  showState() {
    console.log(`Karakter dalam posisi: ${this.state}`);
  }
}

const NIM = 2311104033; 
const karakter = new PosisiKarakterGame(NIM);

karakter.changeState('TombolS'); 
karakter.changeState('TombolW'); 
karakter.changeState('TombolS'); 
karakter.changeState('TombolS');
karakter.changeState('TombolW');
karakter.changeState('TombolW');
