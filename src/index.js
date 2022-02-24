// Imports
import _ from 'lodash';
import './reset.css';
import './style.css';
import nav from './nav';
import header from './header';
import hours from './hours';


// Main component
function component() {
    const element = document.createElement('div');

    element.setAttribute('id', 'content');

    element.appendChild(nav());

    const tabs = element.children[0].children[1].children;

    for (let i = 0; i < 4; i++) {
        tabs[i].addEventListener('click', updateDisplay)
    }

    function updateDisplay() {
        // Target current 2nd child of element
        // delete it
        // Target tab with new active class
        // Run switch statement, if innerhtml equals home => append header and so on
        let section = document.querySelector('section');
        let newSection = this.innerText;
        console.log(this);
        section.remove();

        switch (newSection) {
            case 'Hours':
                element.appendChild(hours());
                break;
            case 'Home':
                element.appendChild(header());
        }
    }

    console.log(tabs[0].className);




    element.appendChild(header());
    // console.log('hi');

    console.log(element.children[0].children[1].children);

    return element;
};

// Append component to html page
document.body.appendChild(component());