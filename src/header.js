const header = () => {
    const element = document.createElement('section');
    const title = document.createElement('h1');
    const paragraph = document.createElement('span');

    element.setAttribute('id', 'header');

    return element;
}

export default header;