const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')
//Take the value from the button and then convert in an entire number
let valueByDefault = parseInt(inputQuantity.value)

//Functions

btnIncrement.addEventListener('click', () => {
    //1 = 1 + 1
    //2 = 2 + 1 
    valueByDefault += 1
    inputQuantity.value = valueByDefault
});

btnDecrement.addEventListener('click', () => {
    valueByDefault -= 1

    inputQuantity.value = valueByDefault
});

//Toggle
//Toggle constants
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const toggleReviews = document.querySelector('.title-reviews');

//contstants content text
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation = document.querySelector('.text-additional-information');
const contentReviews = document.querySelector('.text-reviews');

//Toggle functions

toggleDescription.addEventListener('click', () =>{
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () =>{
    contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () =>{
    contentReviews.classList.toggle('hidden');
});
