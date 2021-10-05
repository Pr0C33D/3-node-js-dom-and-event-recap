// Surasti visus ingredietus ir ju pavadinimus atspausdinti i console
// Visu ingredienu pavadinimai turi buti didziosiomis raidemis ir sudeti i array
// Isspausdinti gauta array i console
const listOfProducts = [];
const liDOMs = document.querySelectorAll('li');

for (let i = 0; i < liDOMs.length; i++) {
    const ingredient = liDOMs[i];
    const title = ingredient.textContent;
    const ingredientInUpper = title.toUpperCase();
    listOfProducts.push(ingredientInUpper);
};
console.log(listOfProducts);