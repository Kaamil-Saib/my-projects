const questionText = document.getElementById("mathQuestion");
const inpAnswer = document.getElementById("inpAnswer");
const btnNextSubmit = document.getElementById("btnNextSubmit");
const winStreak = document.getElementById("winStreak")
let winStreakCount = 0;
winStreak.textContent = winStreakCount + " Wins";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathQuestion() {
    result = getRandomInt(0, 255);
    operands = ["+", "-", "*"];
    let lengthOfEquation = getRandomInt(1, 1);

    for (let i = 0; i < lengthOfEquation; i++)
        result += operands[getRandomInt(0, 2)] + getRandomInt(0, 255)

    return result;
}

function newQuestion() {
    mathQuestion = generateMathQuestion();
    mathAnswer = eval(mathQuestion).toFixed(2);
    inpAnswer.value = ""
    questionText.textContent = mathQuestion;
}

function streakChange() {
    if (winStreakCount == 5) {
        window.alert("muah!");
        winStreakCount = 0;
        streakChange()
    } else {
        winStreak.textContent = winStreakCount + " Wins";
    }
}


newQuestion()

btnNextSubmit.onclick = () => {
    if (parseFloat(inpAnswer.value).toFixed(2) == mathAnswer) {
        winStreakCount++;
        streakChange()
        newQuestion()
    } else {
        window.alert(`incorrect, try again`)
        winStreakCount = 0
        streakChange()
    }
}


