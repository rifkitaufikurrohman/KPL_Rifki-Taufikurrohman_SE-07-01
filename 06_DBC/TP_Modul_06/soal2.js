class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.length === 0 || title.length > 100) {
      throw new Error("Title must be a non-empty string with a maximum of 100 characters");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
    this.MAX_PLAY_COUNT = 10000000;
    this.MAX_INTEGER = Number.MAX_SAFE_INTEGER;
  }

  IncreasePlayCount(count) {
    try {
      if (typeof count !== "number" || count <= 0 || count > this.MAX_PLAY_COUNT) {
        throw new Error(`Play count must be a number between 1 and ${this.MAX_PLAY_COUNT}`);
      }

      if (this.playCount + count > this.MAX_INTEGER) {
        throw new Error("Integer overflow detected! Cannot increase play count.");
      }

      this.playCount += count;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  PrintVideoDetails() {
    console.log(`Video ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

const video = new SayaTubeVideo("Tutorial install By - Rifki Taufik");

try {
  const invalidVideo = new SayaTubeVideo("A".repeat(101));
} catch (error) {
  console.error(`Error creating video: ${error.message}`);
}

try {
  video.IncreasePlayCount(150000);
} catch (error) {
  console.error(`Error increasing play count: ${error.message}`);
}

try {
  for (let i = 0; i < 1000; i++) {
    video.IncreasePlayCount(10000000);
  }
} catch (error) {
  console.error(`Overflow test error: ${error.message}`);
}

video.PrintVideoDetails();
