class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Title harus bertipe string");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah angka harus positif");
    }
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`Video ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

const video = new SayaTubeVideo("Tutorial install by - Rifki Taufik");
video.IncreasePlayCount(5);
video.PrintVideoDetails();
