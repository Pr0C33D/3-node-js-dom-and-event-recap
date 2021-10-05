const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
h1DOM.innerText = "Tu pasileidai zaidima - sekmes!";
const defaultH1 = h1DOM.innerText;
const swapTextOnClick = "Zaidimas progrese";
const ulDOM = document.querySelector('ul');

let button;
let pressCounter = 0;

function appendNode(){
    const node = document.createElement("LI");
    const textnode = document.createTextNode(`Paspaudei ${button} ir dabartinis rezultatas yra ` + pressCounter);
    node.appendChild(textnode);
    ulDOM.appendChild(node);
}

function minus() {
    pressCounter--;
    numberDOM.innerText = pressCounter;
    h1DOM.innerText = swapTextOnClick;
    button = "Minusą";
    appendNode();
}

function plus() {
    pressCounter++;
    numberDOM.innerText = pressCounter;
    h1DOM.innerText = swapTextOnClick;
    button = "Pliusą";
    appendNode();
}

function resetNumber() {
    pressCounter = 0;
    numberDOM.innerText = pressCounter;
    h1DOM.innerText = defaultH1;
    button = "RESET"
    appendNode();
}

minusDOM.addEventListener('click', minus);
plusDOM.addEventListener('click', plus);
resetDOM.addEventListener('click', resetNumber);