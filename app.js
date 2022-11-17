/* Imports */
import { fetchDogs, fetchPastas, fetchTravels, fetchWhales } from './fetch-utils.js';
import { renderDogs, renderPastas, renderTravels, renderWhales } from './render-utils.js';

/* Get DOM Elements */
const dogDiv = document.getElementById('dogs');
const whaleDiv = document.getElementById('whales');
const pastaDiv = document.getElementById('pasta');
const travelDiv = document.getElementById('travel');
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

window.addEventListener('load', async () => {
    const travels = await fetchTravels();

    for (let travel of travels) {
        const travelObject = renderTravels(travel);
        travelDiv.append(travelObject);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
