const name = document.getElementById ('myname')
const button = document.getElementById('submit')
const input = document.getElementById('input')

button.addEventListener('click', () => {

    const userInput = input.value;

    myname.textContent = userInput;

});

const main = document.getElementById ('main')
const blueButton = document.getElementById ('blueButton')
const blackButton = document.getElementById ('blackButton')
const grayButton = document.getElementById ('grayButton')

blueButton.addEventListener( 'click', () => {
    
    main.style.background = 'blue'
})

blackButton.addEventListener('click', () => {

    main.style.background = 'black'

})
grayButton.addEventListener('click', () => {

    main.style.background = 'gray'

})