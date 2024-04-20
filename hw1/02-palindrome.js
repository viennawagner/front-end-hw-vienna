//Take a number as input, return true if it's a palendrome, false otherwise
const isPalindrome = (num) => {
  const original = num.toString();

  //Since strings can't be reversed natively, split it into an array and reverse that
  //Credit: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  const reversed = original.split("").reverse().join("");

  return reversed === original;
};

//Display to user whether input was a palindrome or not
// display invalid input if number is negative
const handleInput = () => {
  const input = parseFloat(document.getElementById("numberInput").value);
  let outputElement = document.getElementById("response");
  let responseText;

  //Determine response to display, error on negative numbers and NaN/empty input
  if (isNaN(input) || input === "" || input < 0) {
    responseText = "Please enter a positive number";
    outputElement.className = "text-danger";
  } else if (isPalindrome(input)) {
    responseText = "Yes. This is a palindrome!";
    outputElement.className = "text-success";
  } else {
    responseText = "No. Try again.";
    outputElement.className = "text-danger";
  }

  outputElement.textContent = responseText;
};

document.querySelector("#numberInput").addEventListener("input", handleInput);