/* Imports */
import { fetchDogs } from './fetch-utils.js';
import { renderDogs } from './render-utils.js';

/* Get DOM Elements */
const dogDiv = document.getElementById('dogs');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const dogs = await fetchDogs();

    for (let dog of dogs) {
        const dogObject = renderDogs(dog);
        dogDiv.append(dogObject);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
