
const liDOMs = document.querySelectorAll('ul > li');

for (let i = 0; i < liDOMs.length; i++) {
    const ingredient = liDOMs[i];
    ingredient.innerText = 'Israuta darzove';
    const title = ingredient.textContent;
    console.log(title);
};