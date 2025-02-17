import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("kemana kamu kemarin?", (tujuan) => {
    console.info(`owhh kemarin ke ${tujuan} tohhh`)

    input.close();
})