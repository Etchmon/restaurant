const header = () => {
    const element = document.createElement('section');
    const title = document.createElement('h1');
    const paragraph = document.createElement('span');

    element.setAttribute('class', 'header');

    title.innerHTML = '"TAKE A TRIP TO SPAIN WITHOUT THE AIRFARE" - ROGELIO HUIDOBRO, FOUNDER';
    paragraph.innerHTML = 'Cafe Sevilla is proud to offer the most authentic Spanish ambiance in their tapas bar, restaurant and nightclub. Join us for live “Gypsy-King” style music seven nights a week, flamenco dinner shows on the weekends, salsa dance classes, happy hour and so much more!';

    element.appendChild(title);
    element.appendChild(paragraph);

    return element;
}

export default header;