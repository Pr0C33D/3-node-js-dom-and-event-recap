// Surasti h1 antraste.
// Surasti h1 antraste h1 antrastei prideti CSS class "simba"

// Surasti visas ingredientus Kiekvienam ingredientui prideti CSS class "darzove"
const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');

const liDOMs = document.querySelectorAll('ul > li');

for (let i = 0; i < liDOMs.length; i++) {
    const ingredient = liDOMs[i];
    ingredient.classList.add('darzove');
};