const inputDOM = document.querySelector('#customer');
const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');
const patiekalasBoxDOM = document.querySelector('#patiekalas');
const sriubaBoxDOM = document.querySelector('#sriuba');
const desertasBoxDOM = document.querySelector('#desertas');
const drinksButtonDOM = document.querySelectorAll('#sultys, #gira, #pienas');


buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();
    let name = inputDOM.value;
    let arNoriPatiekalo = '';
    let arNoriSriubos = '';
    let arNoriDeserto = '';
    let koksGerimas = 'Jokio gėrimo';

    if (inputDOM.value) name = inputDOM.value
    else name = 'Anonimas ';

    if (patiekalasBoxDOM.checked) arNoriPatiekalo = 'nori'
    else arNoriPatiekalo = 'nenori';

    if (sriubaBoxDOM.checked) arNoriSriubos = 'nori'
    else arNoriSriubos = 'nenori';

    if (desertasBoxDOM.checked) arNoriDeserto = 'nori'
    else arNoriDeserto = 'nenori';

    for (let i = 0; i < drinksButtonDOM.length; i++) {
        if (drinksButtonDOM[i].checked) koksGerimas = drinksButtonDOM[i].value + ' yra pasirinktas gerimas';
    }
    
    orderDOM.innerText = `Uzsakovas vardu ${name} ${arNoriSriubos} sriubos, ${arNoriPatiekalo} pagrindinio patiekalo, ${arNoriDeserto} deserto ir ${koksGerimas} `
})