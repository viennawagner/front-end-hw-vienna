document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('userForm');
    const modal_element = document.getElementById('responseModal');

    const handleSubmit = (event) => {
        //Prevent page reload on submit
        event.preventDefault();

        console.log('Event hit');
    }

    form.addEventListener('submit', handleSubmit);
})