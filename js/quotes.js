const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
  {
    quote:
      "Distinguish between working time and playing time. Understand the importance of time and enjoy every moment and make use of it. Then, young days will be filled with joy, and even when you are old, you will have fewer regrets, and you can live your life beautifully even when you are poor.",
    author: "Louisa Mayolcott.",
  },
  {
    quote:
      "Never give up. If there's anything you want to be, take pride in it. Give yourself a chance. Don't think you're terrible. Only then will there be nothing to gain. Set your goals high.That's how life should live.",
    author: "Mike McLaren.",
  },
  {
    quote: "A 1% chance, that's my way.",
    author: "Napoleon.",
  },
  {
    quote:
      "Dream as if you were going to live your whole life.And live today as if you were going to die tomorrow.",
    author: "James Dean.",
  },
  {
    quote:
      "Rather than regret what has already been done, regret not doing what you wanted to do.",
    author: "Talmood.",
  },
  {
    quote: "My secret weapon is still in my hand.That's hope.",
    author: "Napoleon.",
  },
  {
    quote:
      "Don't pursue fancy work. What is important is one's own talent, and the degree of love poured into one's actions.",
    author: "Mother Theresa.",
  },
  {
    quote: "Don't look for a problem and find a solution.",
    author: "Henry Ford.",
  },
  {
    quote:
      "The question is not how quickly you go to the destination, but where is the destination.",
    author: "Maybell Newcomber.",
  },
  {
    quote: "When winter comes, spring won't be far away.",
    author: "Shelly.",
  },
];

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
