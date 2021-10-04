// surasti h1 antraste

// perrasyti h1 elemento teksta i "Zuikio Darzas"

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio darzas';


// Surasti visus darzoves

// Kiekvienos darzoves teksta pakeisti i "Israuta darzove"

const liDOMs = document.querySelectorAll('ul > li');

for (let i = 0; i < liDOMs.length; i++) {
    const ingredient = liDOMs[i];
    ingredient.innerText = 'Israuta darzove';
    const title = ingredient.textContent;
    console.log(title);
};