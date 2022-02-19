// Imports
import _ from 'lodash';
import './style.css';
import nav from './nav';


// Main component
function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    element.appendChild(nav());
    console.log('hi');

    return element;
};

// Append component to html page
document.body.appendChild(component());