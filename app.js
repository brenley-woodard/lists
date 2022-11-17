/* Imports */
import { fetchDogs, fetchWhales } from './fetch-utils.js';
import { renderDogs, renderWhales } from './render-utils.js';

/* Get DOM Elements */
const dogDiv = document.getElementById('dogs');
const whaleDiv = document.getElementById('whales');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const dogs = await fetchDogs();

    for (let dog of dogs) {
        const dogObject = renderDogs(dog);
        dogDiv.append(dogObject);
    }
});

window.addEventListener('load', async () => {
    const whales = await fetchWhales();

    for (let whale of whales) {
        const whaleObject = renderWhales(whale);
        whaleDiv.append(whaleObject);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
