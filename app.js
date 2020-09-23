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
const pinkButton = document.getElementById ('pinkButton')
const lightGreenButton = document.getElementById ('lightGreenButton') 
const lightBlueButton = document.getElementById ('lightBlueButton')

blueButton.addEventListener( 'click', () => {
    
    main.style.background = 'blue'
})

blackButton.addEventListener('click', () => {

    main.style.background = 'black'

})
grayButton.addEventListener('click', () => {

    main.style.background = 'gray'

})
pinkButton.addEventListener('click' () => {

    main.style.background = 'pink'

})
lightGreenButton.addEventListener('click', () => {

    main.style.background = 'lightgreen'

})
lightBlueButton.addEventListener('click', () => {

    main.style.background = 'lightblue'
})