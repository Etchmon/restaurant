const nav = () => {
    const element = document.createElement('nav');
    const logo = document.createElement('span');
    const navLinks = document.createElement('ul');
    const button = document.createElement('button');
    const links = ['Home', 'Menu', 'Hours', 'Contact']

    element.setAttribute('class', 'nav');
    logo.setAttribute('class', 'logo');
    navLinks.setAttribute('id', 'nav-links');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'res-btn');


    for (let i = 0; i < links.length; i++) {
        const a = document.createElement('a');
        a.innerHTML = links[i];
        navLinks.appendChild(a);
    }

    navLinks.appendChild(button);

    logo.innerHTML = 'Cafe Sevilla';
    button.innerHTML = 'Reservation';

    element.appendChild(logo);
    element.appendChild(navLinks);

    return element;
}

export default nav;