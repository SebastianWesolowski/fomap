console.clear();


// const ingredients = require('./ingredients.js');
const nutritional = require('./nutritional.js');


const nutritionalItems = nutritional.filter(item => item.value > 1);

console.clear();
console.log(nutritionalItems);
