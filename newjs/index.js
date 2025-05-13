const quotes = [
  "Believe in yourself!",
  "You can do it!",
  "Keep pushing forward.",
  "Great things take time.",
  "Never stop learning.",
  "Dream big, start small.",
  "Success is not final, failure is not fatal."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}
