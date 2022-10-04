let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu"
  },
  {
    quote: "That which does not kill us makes us stronger.",
    person: "Friedrich Nietzsche"
  },
  {
    quote: "Fortune favors the bold.",
    person: "Virgil"
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "When the going gets tough, the tough get going.",
    person: "Joe Kennedy"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West"
  },
  {
    quote: "I think, therefore I am.",
    person: "René Descartes"
  },
  {
    quote: "Tough times never last but tough people do.",
    person: "Robert H. Schuller"
  },
  {
    quote: "Get busy living or get busy dying.",
    person: "Stephen King"
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    person: "Henry Ford"
  },
  {
    quote: "Tis better to have loved and lost than to have never loved at all.",
    person: "Alrded Lord Tennyson"
  },
  {
    quote: "“Time is money.” ",
    person: "Benjamin Franklin"
  },
  {
    quote: "A man is but what he knows.",
    person: "Sir Francis Bacon"
  },
  {
    quote: "You miss 100 percent of the shots you never take.",
    person: "Wayne Gretzky"
  },
  {
    quote: "If you’re going through hell, keep going.",
    person: "Winston Churchill"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein"
  },
  {
    quote: "I came, I saw, I conquered",
    person: "Julius Caesar"
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    person: "Mark Twain"
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    person: "Eleanor Roosevelt"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    person: "John F. Kennedy"
  },
  {
    quote: "When life gives you lemons, make lemonade.",
    person: "Elbert Hubbard"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    person: "Babe Ruth"
  },
  {
    quote:
      "Life is like a box of chocolates. You never know what you’re going to get.",
    person: "Forrest Gump"
  },
  {
    quote: "He that falls in love with himself will have no rivals.",
    person: "Benjamin Franklin"
  },
  {
    quote:
      "Life is ten percent what happens to you and ninety percent how you respond to it.",
    person: "Charles Swindoll"
  },
  {
    quote: "Have no fear of perfection, you'll never reach it",
    person: "Salvador Dalí"
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    person: "Eleanor Roosevelt"
  },
  {
    quote:
      "In the long run, the sharpest weapon of all is a kind and gentle spirit.",
    person: "Anne Frank"
  }
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
