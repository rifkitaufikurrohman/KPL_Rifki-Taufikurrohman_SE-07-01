class SayaTubeVideo {
  constructor(title) {
    if (!title) throw new Error("Judul video tidak boleh null.");
    if (title.length > 200) throw new Error("Judul video tidak boleh lebih dari 200 karakter.");

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  increasePlayCount(count) {
    if (typeof count !== "number") throw new Error("Play count harus berupa angka.");
    if (count <= 0) throw new Error("Play count tidak boleh negatif atau nol.");
    if (count > 25000000) throw new Error("Penambahan play count maksimal 25.000.000 per panggilan.");

    let newPlayCount = this.playCount + count;
    if (newPlayCount > Number.MAX_SAFE_INTEGER) throw new Error("Play count melebihi batas maksimum integer.");

    this.playCount = newPlayCount;
  }

  printVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

class SayaTubeUser {
  constructor(username) {
    if (!username) throw new Error("Username tidak boleh null.");
    if (username.length > 100) throw new Error("Username tidak boleh lebih dari 100 karakter.");

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    if (!video) throw new Error("Video tidak boleh null.");
    if (!(video instanceof SayaTubeVideo)) throw new Error("Objek harus bertipe SayaTubeVideo.");
    if (video.playCount >= Number.MAX_SAFE_INTEGER) throw new Error("Play count video melebihi batas maksimum.");

    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.slice(0, 8).forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}
try {
  const user = new SayaTubeUser("Rifki Taufik");

  const filmList = [
    "Review Film DareDevil oleh Rifki Taufik",
    "Review Film Loki oleh Rifki Taufik",
    "Review Film Iron Man oleh Rifki Taufik",
    "Review Film Ant-Man oleh Rifki Taufik",
    "Review Film Avenger: Endgame oleh Rifki Taufik",
    "Review Film Joker oleh Rifki Taufik",
    "Review Film IT oleh Rifki Taufik",
    "Review Film Thor oleh Rifki Taufik",
    "Review Film Spider-man oleh Rifki Taufik",
    "Review Film Hulk Away oleh Rifki Taufik",
  ];

  filmList.forEach((film) => {
    try {
      const video = new SayaTubeVideo(film);
      user.addVideo(video);
      video.increasePlayCount(100);
    } catch (error) {
      console.error(`Gagal menambahkan video: ${error.message}`);
    }
  });

  user.printAllVideoPlaycount();

  try {
    const testVideo = new SayaTubeVideo("Review Film Test Overflow oleh Rifki Taufik");
    testVideo.increasePlayCount(Number.MAX_SAFE_INTEGER);
  } catch (error) {
    console.error(`Terjadi kesalahan saat menaikkan play count: ${error.message}`);
  }
} catch (error) {
  console.error(`Kesalahan saat inisialisasi: ${error.message}`);
}
