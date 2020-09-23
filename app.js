const name = document.getElementById ('myname')
const button = document.getElementById('submit')
const input = document.getElementById('input')

button.addEventListener('click', () => {

    const userInput = input.value;

    myname.textContent = userInput;

});
