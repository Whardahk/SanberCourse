const prompt = require("prompt-sync")({ sigint: true });

const score = prompt("Input Nilai: ");
var grade;

if (score >= 85 && score <= 100) {
  grade = "A";
} else if (score >= 75 && score < 85) {
  grade = "B";
} else if (score >= 65 && score < 75) {
  grade = "C";
} else if (score >= 55 && score < 65) {
  grade = "D";
} else {
  grade = "E";
}

var nilai;
switch (true) {
  case score >= 85:
    nilai = "A";
    break;
  case score >= 75:
    nilai = "B";
    break;
  case score >= 65:
    nilai = "C";
    break;
  case score >= 55:
    nilai = "D";
    break;
  default:
    nilai = "E";
}

console.log("Grade = " + grade);
console.log("Nilai = " + nilai);
