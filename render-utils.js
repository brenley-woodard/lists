export function renderDogs(dog) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = dog.name;

    const p = document.createElement('p');
    p.textContent = dog.colors;

    const p2 = document.createElement('p');
    p2.textContent = dog.characteristics;

    div.append(h3, p, p2);
    return div;
}
export function renderWhales(whale) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = whale.name;

    const p = document.createElement('p');
    p.textContent = whale.feeding_type;

    const p2 = document.createElement('p');
    p2.textContent = whale.oceans;

    div.append(h3, p, p2);
    return div;
}

export function renderPastas(pasta) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = pasta.name;

    const p = document.createElement('p');
    p.textContent = pasta.vegetarian;

    const p2 = document.createElement('p');
    p2.textContent = pasta.ingredients;

    div.append(h3, p, p2);
    return div;
}

// export function renderTravels(travel) {
//     const div = document.createElement('div');

//     const h3 = document.createElement('h3');
//     h3.textContent = travel.name;

//     const p = document.createElement('p');
//     p.textContent = travel.vibes;

//     const p2 = document.createElement('p');
//     p2.textContent = travel.currency;

//     div.append(h3, p, p2);
//     return div;
// }
