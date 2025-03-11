class DoorMachine {
  constructor() {
    this.state = 'Terkunci';
    this.showState();
  }

  lock() {
    this.state = 'Terkunci';
    this.showState();
  }

  unlock() {
    this.state = 'Terbuka';
    this.showState();
  }

  showState() {
    if (this.state === 'Terkunci') {
      console.log('Pintu terkunci');
    } else if (this.state === 'Terbuka') {
      console.log('Pintu tidak terkunci');
    }
  }
}

const door = new DoorMachine();

door.unlock(); 
door.lock();   


