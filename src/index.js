// Imports
import _ from 'lodash';
import './reset.css';
import './style.css';
import nav from './nav';
import header from './header';


// Main component
function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    element.appendChild(nav());

    // element.appendChild(header());
    // console.log('hi');

    return element;
};

// Append component to html page
document.body.appendChild(component());