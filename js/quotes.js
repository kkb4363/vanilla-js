const quotes = [
    {
        quote: "The way to get started is to quit talking and Begin", 
        author : "walt disney",
    },
    {
        quote: 'to be happy, we must not be too concerned with others',
        author : 'Albert Camus',
    },
    {
        quote : 'Happiness is not something ready-made. it comes from your own actions',
        author : 'Dalai Lama',
    },
    {
        quote : 'Happy people plan actions, they do not plan results',
        author : 'Dennis Waltley',
    },
    {
        quote : 'The two enemies of human happiness are pain and boredom',
        author : 'Arthir Schopenhauer',
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;