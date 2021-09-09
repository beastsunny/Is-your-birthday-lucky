const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-now");
const outputBox = document.querySelector("#output-box")



function compareValues(sum, luckyNumber) {
    if (sum == luckyNumber) {
        outputBox.innerText = ("Your Birthday Is Lucky");
    } else {
        outputBox.innerText = ("Your Birthday is not Lucky")
    }
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum == 0) {
        outputBox.innerText = ("please fill the above fields")
    } else {
        compareValues(sum, luckyNumber.value)
    }
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    console.log(dob);
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;

}


checkNumberButton.addEventListener('click', checkBirthDateIsLucky)