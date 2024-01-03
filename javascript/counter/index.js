const decButton = document.getElementById("decCounter");
const incButton = document.getElementById("incCounter");
const resetButton = document.getElementById("resetCounter");

const labelCounter = document.getElementById("countNum");
let count = 0;

incButton.onclick = function () {
    count++;
    labelCounter.textContent = count;
}
decButton.onclick = function () {
    count--;
    labelCounter.textContent = count;
}
resetButton.onclick = function () {
    count = 0;
    labelCounter.textContent = count;
}