new Typewriter("#quote", {
  strings: "Waiting for your choice of topic...",
  autoStart: true,
  delay: 10,
  cursor: "",
});

let quoteFormEvent = document.querySelector("#quote-form");

function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Generating your inspirational quote...🛠️",
    autoStart: true,
    delay: 5,
    cursor: "",
  });

  let userTopic = document.querySelector("#topic").value;

  const apiKey = "aa56f014o9bf10caa03ebda1c6dfte85";
  const prompt = `Please generate an inspirational quote including the subject of ${userTopic}`;
  const context =
    "You are a witty genius that has extensive knowledge of inspirational quotes that have a cheerfully nihilistic edge. Your mission is to generate a short inspirational quote that could be considered nihilistic/ disappointing that is no more than a couple of sentences long in basic HTML. Make sure the font weight for the poem is 400, the line height for the poem is 28px. a <br/> is always at the end of the poem, then after the <br/>, sign off with '<strong>SheCodes AI<strong/>' on a new line. Do not include quotation marks around the quote or include a sign off that is not SheCodes AI as stated here. The font size is always large";
  const url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(url).then(displayQuote);
}

quoteFormEvent.addEventListener("submit", generateQuote);
