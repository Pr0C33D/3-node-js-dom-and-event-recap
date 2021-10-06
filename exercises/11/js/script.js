const inputDOM = document.querySelector('#message');
const spanDOM = document.querySelector('span');
const buttonDOM = document.querySelector('button');
const bgColorDOM= document.querySelector('#bg-color');
const textColorDOM = document.querySelector('#text-color');

inputDOM.style.color = "red";

buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    spanDOM.style.color = textColorDOM.value;
    spanDOM.style.backgroundColor = bgColorDOM.value;
    inputDOM.value = '';
});
