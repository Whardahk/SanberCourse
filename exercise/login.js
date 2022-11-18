const prompt = require("prompt-sync")({ sigint: true });

var username = prompt("Enter Username: ");
var password = prompt("Enter Password: ");

var validusername = "whardah";
var validpassword = "password";

if (username == validusername && password == validpassword) {
  console.log("Login Success, Wellcome !!!");
} else {
  console.log("Invalid Username/Password");
}
