let homeCount = 0;
let guestCount = 0;
let scoreNow = document.getElementById("score");
let scoreNow2 = document.getElementById("score-2");

function add1_2() {
  guestCount += 1;
  scoreNow2.textContent = guestCount;
}

function add2_2() {
  guestCount += 2;
  scoreNow2.textContent = guestCount;
}

function add3_2() {
  guestCount += 3;
  scoreNow2.textContent = guestCount;
}
function add1() {
  homeCount += 1;
  scoreNow.textContent = homeCount;
}

function add2() {
  homeCount += 2;
  scoreNow.textContent = homeCount;
}

function add3() {
  homeCount += 3;
  scoreNow.textContent = homeCount;
}
