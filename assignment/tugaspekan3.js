console.log("No 1");
const prompt = require("prompt-sync")({ sigint: true });

var angka = prompt("Input angka: ");

if (angka < 0) {
  console.log("Tidak bisa input bilangan negatif");
}
