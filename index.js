let count = 0;
let scoreNow = document.getElementById("score");
let scoreNow2 = document.getElementById("score-2");

function add1_2() {
  count += 1;
  scoreNow2.textContent = count;
}

function add2_2() {
  count += 2;
  scoreNow2.textContent = count;
}

function add3_2() {
  count += 3;
  scoreNow2.textContent = count;
}
function add1() {
  count += 1;
  scoreNow.textContent = count;
}

function add2() {
  count += 2;
  scoreNow.textContent = count;
}

function add3() {
  count += 3;
  scoreNow.textContent = count;
}
