console.log("No 1");
const prompt = require("prompt-sync")({ sigint: true });

var angka = prompt("Input angka: ");

if (angka < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (angka % 2 == 1) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  var hasil = Math.sqrt(Number(angka));
  console.log("Hasil akar pangkat 2 dari " + angka + " adalah " + hasil);
}

const { productBin } = require("./dataarray");
console.log("No 2");
console.log(productBin);

var total_quantity = 0;
for (let i = 0; i < productBin.data.length; i++) {
  total_quantity += productBin.data[i].quantity;
}
console.log("Total Quantity = " + total_quantity);
