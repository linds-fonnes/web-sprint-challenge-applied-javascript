// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');

function Header() {
    const header = document.createElement('div');
    const dateSpan = document.createElement('span');
    const lambdaTimes = document.createElement('h1');
    const tempSpan = document.createElement('span');

    dateSpan.classList.add('date');
    lambdaTimes.textContent = 'Lambda Times';
    tempSpan.classList.add('temp');
    dateSpan.textContent = 'MARCH 28, 2020';
    tempSpan.textContent = '98°';

    headerContainer.appendChild(header);
    header.appendChild(dateSpan);
    header.appendChild(lambdaTimes);
    header.appendChild(tempSpan);

    console.log(header)
    return header;
}

// const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
