//Return the source word, with html to highlight it if it matches the target word
const replaceWithHighlightHTML = (source, target) => {
  return source.toLowerCase() === target
    ? `<mark class='p-0' style='background-color: yellow'>${source}</mark>`
    : source;
};

//Highlight words in the paragraph based on user input
const handleKeyUp = () => {
  const input_value = document
    .getElementById("userInput")
    .value.trim()
    .toLowerCase();
  const search_element = document.getElementById("toSearch");
  const search_arr = search_element.textContent.split(RegExp("\\b"));

  search_element.innerHTML = search_arr
    .map((word) => replaceWithHighlightHTML(word, input_value))
    .join("");
};

document.getElementById("userInput").addEventListener("keyup", handleKeyUp);
