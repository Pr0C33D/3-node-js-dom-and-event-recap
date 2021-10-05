const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
const defaultH1 = h1DOM.innerText;
const swapTextOnClick = "Zaidimas progrese";

let pressCounter = 0;


function minus() {
    pressCounter--;
    numberDOM.innerText = pressCounter;
    h1DOM.innerText = swapTextOnClick;
}

function plus() {
    pressCounter++;
    numberDOM.innerText = pressCounter;
    h1DOM.innerText = swapTextOnClick;
}

function resetNumber() {
    pressCounter = 0;
    numberDOM.innerText = pressCounter;
    h1DOM.innerText = defaultH1;
}

minusDOM.addEventListener('click', minus);
plusDOM.addEventListener('click', plus);
resetDOM.addEventListener('click', resetNumber);