
//returns true if the given number is a palendrome, false otherwise
const isPalendrome = (num) => {
    const original = num.toString(); 

    //reverse string by splitting it into an array and reversing that, then rejoining
    const reversed = original.split('').reverse().join('');

    return reversed === original;
}

//Display to user whether input was a palendrome or not
// displays invalid input if number is negative
const handleInput = () => {
    const input = document.getElementById("numberInput").value;
    let outputElement = document.getElementById("response");
    let responseText;

    //Determine response to display, error on negative numbers and NaN
    if(input === NaN || input < 0) {
        responseText = "Please enter a positive number";
        outputElement.className = "text-danger"
    }
    else if(isPalendrome(input)) {
        responseText = "Yes. This is a palendrome!";
        outputElement.className = "text-success"
    }
    else {
        responseText = "No. Try again.";
        outputElement.className = "text-danger"
    }

    outputElement.textContent = responseText;
}

const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);