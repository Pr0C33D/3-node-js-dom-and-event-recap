// <!-- Surasti h1 (antraste)

// Perrasyti h1 elemento teksta i "Zuikio pomidoru darzas"

// Padaryk, jog h1 elementas turetu CSS class "pavadinimas"

// Surasti visas darzoves

// Kiekvienos darzoves teksta pakeisti i "Pomidoras"

// Kiekvienai darzovei suteikti CSS class "pomidoras" -->

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio pomidoru darzas';
h1DOM.classList.add('pavadinimas');

const liDOMs = document.querySelectorAll('li');
for (i = 0; i < liDOMs.length; i++){
    const ingredient = liDOMs[i];
    ingredient.innerText = 'Pomidoras';
    ingredient.classList.add('pomidoras');
}
