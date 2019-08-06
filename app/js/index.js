const ingredients = require('./ingredients.js');
const nutritional = require('./nutritional.js');

const ingredientsList = ingredients.map(
  ({ Id, NameEn, NutritionalIngredientsId }) => {
    const arrayElet = [];
    const arrayElement = NutritionalIngredientsId;

    arrayElement.forEach(element => {
      const getNutritional = nutritional.find(({ Id }) => Id === element);

      return arrayElet.push(getNutritional);
    });

    const arrAll = arrayElet.map(({ Id, nameEn, Value, unit }) => {
      return `${Id} | ${nameEn} |  ${Value} ${unit}`;
    });

    return `${Id} | ${NameEn} |  ${arrAll}`;
  }
);
console.clear;
console.log(ingredientsList);
