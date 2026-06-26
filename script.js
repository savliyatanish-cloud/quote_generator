const quotes = [
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex].text}"`;
  authorText.textContent = `- ${quotes[randomIndex].author}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);

showRandomQuote();
