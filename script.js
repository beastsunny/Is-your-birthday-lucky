const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-now");




function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        console.log("Your Birthday Is Lucky");
    }
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value)
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;

}










checkNumberButton.addEventListener('click', checkBirthDateIsLucky)