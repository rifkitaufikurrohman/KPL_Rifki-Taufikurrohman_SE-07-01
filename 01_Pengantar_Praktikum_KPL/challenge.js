import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Apa jurusan kamu? ", (major) => {
    console.info(`Jurusanku: ${major}`);
      
    input.question("Apa nama Universitas mu? ", (univ) => {
        console.info(`Universitas: ${univ}`);
  
        input.question("Berapa umurmu sekarang? ", (age) => {
            console.info(`Umur: ${age}`);
                      
            input.close();
        });
    });
});
