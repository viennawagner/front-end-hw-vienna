document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  //Set all modal text values to match text input
  const handleSubmit = (event) => {
    //Prevent page reload on submit
    event.preventDefault();

    //Name
    let name_elem = document.querySelector(".nameResponseArea");
    const name_input = document.getElementById("name").value.trim();
    setTextContent(name_elem, name_input);

    //Email
    let email_elem = document.querySelector(".emailResponseArea");
    const email_input = document.getElementById("email").value.trim();
    setTextContent(email_elem, email_input);

    //Registration status
    let status_elem = document.querySelector(".statusResponseArea");
    const status_input = document.getElementById("regStatus").value.trim();
    setTextContent(status_elem, status_input);

    //Anything else?
    let also_elem = document.querySelector(".alsoResponseArea");
    const also_input = document.getElementById("also").value.trim();
    setTextContent(also_elem, also_input);

    //Classes taken
    let classes_elem = document.querySelector(".classResponseArea");
    const classes = document.querySelectorAll(".listedClass");
    let classes_input = "";
    for (let i = 0; i < classes.length; i += 1) {
      if (classes[i].checked) {
        classes_input += `- ${classes[i].value}\n`;
      }
    }
    setTextContent(classes_elem, classes_input);
  };

  /* Set given element's textContent to "no response given" if given input is empty 
       or to the given input otherwise */
  const setTextContent = (elem, input) => {
    elem.textContent = input ? input : "No response given";
  };

  form.addEventListener("submit", handleSubmit);
});
