let quoteFormEvent = document.querySelector("#quote-form");

function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "The early bird catches the worm, and is the first to get indigestion.",
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

quoteFormEvent.addEventListener("submit", generateQuote);
