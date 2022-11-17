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
