const nav = () => {
    const element = document.createElement('nav');
    const logo = document.createElement('span');

    element.setAttribute('class', 'nav');
    logo.setAttribute('class', 'logo');
    logo.innerHTML = 'Cafe Sevilla';

    element.appendChild(logo);

    return element;
}

export default nav;