const menu = () => {
    const element = document.createElement('section');
    const title = document.createElement('h1');

    title.innerHTML = 'MENU';

    element.setAttribute('class', 'menu-section');

    element.appendChild(title);

    const items = [
        {
            name: 'Beef Noodle',
            description: 'lorem ipsum dolor and some other random latin',
            price: '14'
        },
        {
            name: 'Spanish Rice',
            description: 'lorem ipsum dolor and some other random latin',
            price: '10'
        },
        {
            name: 'Mushroom Rissotto',
            description: 'lorem ipsum dolor and some other random latin',
            price: '10'
        },
        {
            name: 'Fish and Chips',
            description: 'lorem ipsum dolor and some other random latin',
            price: '12'
        },
        {
            name: 'Orange Chicken',
            description: 'lorem ipsum dolor and some other random latin',
            price: '14'
        },
        {
            name: 'Clam Chowder',
            description: 'lorem ipsum dolor and some other random latin',
            price: '12'
        },
        {
            name: 'Roasted Carrot Soup',
            description: 'lorem ipsum dolor and some other random latin',
            price: '10'
        },
        {
            name: 'Steak and Mash',
            description: 'lorem ipsum dolor and some other random latin',
            price: '18'
        },
    ];

    for (let i = 0; i < items.length; i++) {
        const card = document.createElement('div');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const price = document.createElement('span');

        card.setAttribute('class', 'card');

        title.innerHTML = items[i].name;
        description.innerHTML = items[i].description;
        price.innerHTML = items[i].price;

        card.appendChild(title);
        card.append(description);
        card.appendChild(price);

        element.appendChild(card);

    }


    return element;
}

export default menu;