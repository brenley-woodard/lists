/* Imports */
import { fetchDogs, fetchPastas, fetchWhales } from './fetch-utils.js';
import { renderDogs, renderPastas, renderWhales } from './render-utils.js';

/* Get DOM Elements */
const dogDiv = document.getElementById('dogs');
const whaleDiv = document.getElementById('whales');
const pastaDiv = document.getElementById('pasta');
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

window.addEventListener('load', async () => {
    const pastas = await fetchPastas();

    for (let pasta of pastas) {
        const pastaObject = renderPastas(pasta);
        pastaDiv.append(pastaObject);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
