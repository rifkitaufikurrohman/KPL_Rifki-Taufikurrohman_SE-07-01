// main.js

const Subject = require("./Subject");
const ConcreteObserver = require("./ConcreteObserver");

// Membuat instance Subject
const subject = new Subject();

// Membuat observer dan melampirkannya
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.attach(observer1);
subject.attach(observer2);

console.log("Set state ke 1");
subject.setState(1);

console.log("Set state ke 2");
subject.setState(2);

// Melepas observer1
subject.detach(observer1);

console.log("Set state ke 3 (Observer 1 sudah dilepas)");
subject.setState(3);
