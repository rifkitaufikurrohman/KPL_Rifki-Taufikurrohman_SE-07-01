class SimpleDataBase {
  constructor() {
    this.storedData = [];
    this.inputDates = [];
  }

  AddNewData(data) {
    this.storedData.push(data);
    this.inputDates.push(new Date().toUTCString());
  }

  PrintAllData() {
    this.storedData.forEach((data, index) => {
      console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
    });
  }
}

const database = new SimpleDataBase();

database.AddNewData(23);
database.AddNewData(11);
database.AddNewData(10);

database.PrintAllData();
