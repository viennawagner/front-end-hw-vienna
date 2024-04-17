//returns true if the given number is a palindrome, false otherwise
const isPalindrome = (num) => {
  const original = num.toString();

  //reverse string by splitting it into an array and reversing that, then rejoining
  //credit: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  const reversed = original.split("").reverse().join("");

  return reversed === original;
};

//Display to user whether input was a palindrome or not
// displays invalid input if number is negative
const handleInput = () => {
  const input = document.getElementById("numberInput").value;
  let outputElement = document.getElementById("response");
  let responseText;

  //Determine response to display, error on negative numbers and NaN/empty input
  if (input === NaN || input === "" || input < 0) {
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

const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);
