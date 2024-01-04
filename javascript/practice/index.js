/*console.log(`bruh`)

window.alert(`Warning`)

//this is a comment
*/


let myH1 = document.getElementById("myH1");
let myP = document.getElementById("myP");

let age = 20;
let randomText = "Bruh moment";
let percAvg = 65.75;
let gpa = (percAvg / 20) - 1;

myH1.textContent = "Bruh";
myP.textContent = `Commodo sint tempor officia reprehenderit dolore veniam tempor proident tempor ipsum. Occaecat anim reprehenderit do voluptate. You are ${age} years old. You got a ${gpa} gpa that is a ${randomText}.`;

let myText = document.getElementById("myText");
let mySubmit = document.getElementById("mySubmit");

mySubmit.addEventListener("click", () => {
    myP.textContent += ` ${myText.value}`;
})


/////////////////////////////////////////////////////////////////////////
function shift(c) {
    asciiVal = c.charCodeAt(0);
    if ((asciiVal >= 65 && asciiVal <= 90) || (asciiVal >= 97 && asciiVal <= 122)) {
        if (asciiVal == 90) {
            return String.fromCharCode(65)
        } else if (asciiVal == 122) {
            return String.fromCharCode(97)
        } else {
            return String.fromCharCode(asciiVal + 1)
        }
    } else { return c }
}

function shiftAsciiText(unshiftedP) {
    let result = "";
    for (var c of unshiftedP.textContent) {
        result += shift(c);
    }
    unshiftedP.textContent = result;
}

shiftAscii = document.getElementById("shiftAscii");

shiftAscii.addEventListener("click", () => { shiftAsciiText(myP) });

/**
 * @param {string[]} bank
 * @return {number}
 */

function countDevices(row) {
    if (typeof row === 'string') {
        let result = 0;
        for (let i = 0; i < row.length; i++) {
            if (row[i] === '1') {
                result++;
            }
        }

        return result;
    } else {
        return 0
    }
}
/*var numberOfBeams = function (bank) {
    let laserTotal = 0;
    let prevRowCount = 0;

    if (bank.length === 1) {
        return 0;
    } else {
        for (const row of bank) {
            const curRowCount = calc(row);
            if (curRowCount === 0)
                continue;

            total += curRowCount * prevRowCount;
            prevRowCount = curRowCount;
        }
        return total;
    }
}

let banks = ["000000", "011001", "000000", "010100", "001000"];
console.log(numberOfBeams(banks));*/


///////////////Ternary Opereator//////////////

let studentAge = 20;

message = studentAge >= 18 ? "You are an adult" : "You are a minor"

console.log([...message])
// ['Y', 'o', 'u', ' ', 'a', 'r', 'e', ' ', 'a', 'n', ' ', 'a', 'd', 'u', 'l', 't']


function calcAvg(...num) {
    const sum = num.reduce((acc, num) => acc + num, 0);
    return sum / num.length
}
console.log(calcAvg(1, 2, 3, 4, 5, 6))