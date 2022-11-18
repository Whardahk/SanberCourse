const prompt = require("prompt-sync")({ sigint: true });

for (let i = 1; i <= 10; i++) {
  console.log("Perulanagan ke-" + i);
}

var ulangi = prompt("Are you ready? ");
console.log("start");
var counter = 0;

while (ulangi) {
  var jawab = prompt("Apakah anda ingin mengulangi?(yes/no) : ");
  counter++;
  if (jawab == false || jawab == "no") {
    ulangi = false;
  }

  console.log("Pengulangan ke- " + counter);
}
