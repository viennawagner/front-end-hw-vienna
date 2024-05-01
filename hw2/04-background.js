const bg = document.getElementById("background");
const interval_element = document.getElementById("interval");
const button = document.getElementById("start-stop");
const message_element = document.getElementById("message");
let interval_id;

/* The current button state
   either a start button(true) or stop button(false)
   should only be set by changeButtonState */
let is_button_start_state = true;

//Toggle the button state, change it's color and text to match
const changeButtonState = () => {
  is_button_start_state = !is_button_start_state;
  if (is_button_start_state) {
    button.setAttribute("value", "Start");
    button.setAttribute("class", "btn btn-primary mt-3 rounded");
  } else {
    button.setAttribute("value", "Stop");
    button.setAttribute("class", "btn btn-danger mt-3 rounded");
  }
};

/* Generate a random color, with a reduced maximum alpha value to
   prevent too harsh of colors */
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const a = Math.floor(Math.random() * 30) + 50;

  return "#" + r.toString(16) + b.toString(16) + g.toString(16) + a.toString();
};

//Set background color to a random color
const setBackgroundColor = () => {
  bg.style.backgroundColor = randomColor();
};

//Do all bookkeeping needed when button is clicked
const handleClick = () => {
  //Max interval to prevent overflow issues
  const max_interval = 500000000000000;
  if (is_button_start_state) {
    const interval = parseFloat(interval_element.value);
    if (interval >= 0.5 && interval <= max_interval) {
      interval_id = setInterval(setBackgroundColor, interval * 1000);
      changeButtonState();
      message_element.textContent = "";
    } else if (interval < 0.5 && interval >= 0) {
      message_element.textContent =
        "For your safety, please enter a number >= 0.5";
    } else if (interval > max_interval) {
      message_element.textContent = `For technical reasons, please enter a number <= ${max_interval}`;
    } else {
      message_element.textContent = "Please enter a positive number";
    }
  } else {
    clearInterval(interval_id);
    changeButtonState();
  }
};

button.addEventListener("click", handleClick);
