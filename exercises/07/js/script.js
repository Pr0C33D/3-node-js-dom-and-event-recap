const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');

let pressCounter = 0;

function minus(){
    pressCounter--;
    numberDOM.innerText = pressCounter;
}

function plus(){
    pressCounter++;
    numberDOM.innerText = pressCounter;
}

function resetNumber(){
    pressCounter = 0;
    numberDOM.innerText = pressCounter;
}

minusDOM.addEventListener('click', minus);
plusDOM.addEventListener('click', plus);
resetDOM.addEventListener('click', resetNumber);