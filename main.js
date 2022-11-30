let endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

let getQuote = () => {
    fetch(endpoint)
    .then((response) => {return response.json()})
    .then((data) => {displayQuote(data.message)})
    .catch(() => {console.log("An error occurred")});
};

let displayQuote = quote => {
    let quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
};

let newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();