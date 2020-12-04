// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then( res => {
    res.data.articles.javascript.forEach(el => {
        wholeContainer.appendChild(articleMaker(el));
    });
    res.data.articles.bootstrap.forEach(el => {
        wholeContainer.appendChild(articleMaker(el));
    });
    res.data.articles.technology.forEach(el => {
        wholeContainer.appendChild(articleMaker(el));
    });
    res.data.articles.jquery.forEach(el => {
        wholeContainer.appendChild(articleMaker(el));
    });
    res.data.articles.node.forEach(el => {
        wholeContainer.appendChild(articleMaker(el));
    })
})
const wholeContainer = document.querySelector('.cards-container');

function articleMaker({headline, authorPhoto, authorName}){
const cardDiv = document.createElement('div');
const headLine = document.createElement('div');
const authorDiv = document.createElement('div');
const imageDiv = document.createElement('div');
const theImage = document.createElement('img');
const authorSpan = document.createElement('span');

cardDiv.classList.add('card');
headLine.classList.add('headline');
authorDiv.classList.add('author');
imageDiv.classList.add('img-container');

headLine.textContent = headline;
theImage.src = authorPhoto;
authorSpan.textContent = authorName;

wholeContainer.appendChild(cardDiv);
cardDiv.appendChild(headLine);
cardDiv.appendChild(authorDiv);
authorDiv.appendChild(imageDiv);
authorDiv.appendChild(authorSpan);
imageDiv.appendChild(theImage);

cardDiv.addEventListener('click', () => {
    console.log(headline);
});
return cardDiv;
}

