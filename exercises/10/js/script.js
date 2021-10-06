const submitMygtukas = document.querySelector('button');
const enteredText = document.querySelector('input');
const spanDom = document.querySelector('span');
submitMygtukas.addEventListener('click', function(event){
    event.preventDefault();
    spanDom.innerText = enteredText.value;
    enteredText.value = null; //arba ''
});