const hours = () => {
    const element = document.createElement('section');
    const title = document.createElement('h1');
    const div = document.createElement('div');

    element.setAttribute('class', 'hours-section');
    div.setAttribute('class', 'hours');

    const hours = [
        {
            day: 'Monday',
            hours: 'Closed',
        },
        {
            day: 'Tuesday',
            hours: '5pm - 10pm',
        },
        {
            day: 'Wednesday',
            hours: '5pm - 10pm',
        },
        {
            day: 'Thursday',
            hours: '5pm - 10pm',
        },
        {
            day: 'Friday',
            hours: '11am - 10pm',
        },
        {
            day: 'Saturday',
            hours: '11am - 10pm',
        },
        {
            day: 'Sunday',
            hours: '11am - 10pm',
        },
    ]

    for (let i = 0; i < hours.length; i++) {
        const day = document.createElement('span');
        const time = document.createElement('span');

        day.innerHTML = hours[i].day;
        time.innerHTML = hours[i].hours;

        div.appendChild(day);
        div.appendChild(time);
    }

    title.innerHTML = 'Hours';

    element.appendChild(title);
    element.appendChild(div);


    return element;
}

export default hours;