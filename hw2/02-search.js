/* Find the characters picked by the user and add cards with their info
   to the DOM */
const handleClick = () => {
  const input = document.getElementById("userInput").value;
  const out_element = document.getElementById("card-placements");
  clearChildren(out_element);
  for (const character of findCharacters(input)) {
    out_element.appendChild(createCard(character));
  }

  //If there's no match, no children are added so firstChild is null which evaluates to false
  if (!out_element.firstChild) {
    out_element.textContent = "No characters matched your search";
  }
};

//Remove all child elements from the given element
const clearChildren = (elem) => {
  elem.replaceChildren();
};


/* Find all characters whose name includes the given string
   return a list of the names and birth years of the found characters */
const findCharacters = (to_match) => {
  //String.includes is case sensitive, so we need to convert everything to lowercase
  const to_match_lowercase = to_match.toLowerCase();
  return characters.filter((c) =>
    c.name.toLowerCase().includes(to_match_lowercase)
  );
};

/* Create a card with the name and birth year of the given card
   return an HTML element of the card created */
const createCard = (character) => {
  let card = document.createElement("div");
  let name_element = document.createElement("p");
  let birth_year_element = document.createElement("p");

  name_element.textContent = character.name;
  birth_year_element.textContent = `Birth year: ${character.birth_year}`;
  card.appendChild(name_element);
  card.appendChild(birth_year_element);

  name_element.setAttribute("class", "fw-bold text-center text-wrap");
  birth_year_element.setAttribute("class", "text-center");
  card.setAttribute("class", "card col-8 col-md-4 col-lg-3 m-1");

  return card;
};


document.getElementById("searchBtn").addEventListener("click", handleClick);
