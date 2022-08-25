const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    }
    ,
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    }
    ,
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }
    ,
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton"
    }
    ,
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos"
    }
    ,
    {
        quote: "Being happy never goes out of style.",
        author: "Lilly Pulitzer"
    }
    ,
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé"
    }
    ,
    {
        quote: "Three things in life – your health, your mission, and the people you love. That’s it.",
        author: "Naval Ravikant"
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant"
    }

]


const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todayQuote.quote;
author.textContent = todayQuote.author;

