import { add } from "lodash";

const contact = () => {
    const element = document.createElement('section');
    const title = document.createElement('h1');
    const div = document.createElement('div');
    const email = document.createElement('span');
    const address = document.createElement('span');
    const phone = document.createElement('span');

    element.setAttribute('class', 'contact-section');

    const info = {
        email: "cafeSevilla@hotmail.com",
        address: "353 Fifth Ave, San Diego, CA 92101",
        phone: "(619) 233-5979",
    }

    title.innerHtml = 'Contact Information';
    email.innerHTML = info.email;
    address.innerHTML = info.address;
    phone.innerHTML = info.phone;

    div.appendChild(email);
    div.appendChild(address);
    div.appendChild(phone);

    element.appendChild(div);

    return element;
}

export default contact;