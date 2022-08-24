"use strict";
const subBtn = document.getElementById("submitName");
subBtn.addEventListener("click", getName);
function getName() {
  let userName = document.getElementById("visitor").value;
  console.log(userName);
  return userName;
}
let visitor = getName();
console.log(visitor);
// let button = document.getElementById("submit-name");
const dest = ["Mars", "Venus", "Saturn", "the Moon", "the Horsehead Nebula"];
let randomDest = Math.floor(Math.random() * dest.length);
let destPrize = dest[randomDest];
const greeting = `Hello, ${getName()}!`;
const winMsg = `Congratulations - you have just won a trip to ${destPrize}. Don't forget to send a postcard!`;
const loseMsg = `Sorry - you didn't win anything. Better luck next time.`;
const winnerNames = [
  "Deryn",
  "Wombat",
  "Moosey",
  "Dan",
  "Danny,",
  "Daniel",
  "Wolfy",
  "Spuddy",
  "Chris",
  "Christopher",
];

for (let i = 0; i <= winnerNames.length; i++) {
  if (visitor === winnerNames[i]) {
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("winner-message").textContent = winMsg;
  } else {
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("no-win").textContent = loseMsg;
  }
}

// if (
//   userName === "Deryn" ||
//   userName === "deryn" ||
//   userName === "Wombat" ||
//   userName === "wombat" ||
//   userName === "Moosey" ||
//   userName === "moosey" ||
//   userName === "Dan" ||
//   userName === "Danny" ||
//   userName === "Daniel" ||
//   userName === "dan" ||
//   userName === "danny" ||
//   userName === "daniel" ||
//   userName === "Spuddy" ||
//   userName === "Wolfy" ||
//   userName === "spuddy" ||
//   userName === "wolfy" ||
//   userName === "Chris" ||
//   userName === "chris" ||
//   userName === "Christopher" ||
//   userName === "christopher"
// ) {
//   document.write(prizeMsg);
// } else {
//   document.write(noWinMsg);
// }

// if (destPrize === "Mars") {
//   document.getElementById("mars").style.display = "block";
// } else if (destPrize === "Venus") {
//   document.getElementById("venus").style.display = "block";
// } else if (destPrize === "Saturn") {
//   document.getElementById("saturn").style.display = "block";
// } else if (destPrize === "the moon") {
//   document.getElementById("moon").style.display = "block";
// } else if (destPrize === "the Horsehead Nebula") {
//   document.getElementById("horsehead").style.display = "block";
// } else if (loseMsg) {
//   document.getElementById("going-nowhere").style.display = "block";
// }
