// Imports
import _ from 'lodash';


// Main component
function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    console.log('hi');

    return element;
};

// Append component to html page
document.body.appendChild(component());