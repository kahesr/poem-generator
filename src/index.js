function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "|",
    delay: 20,
    loop: false,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let subject = document.querySelector("#input-text").value;
  let apiKey = "taf74bb8e045996263fo9880fc8a042e";
  let apiBase = "https://api.shecodes.io/ai/v1/generate";
  let context =
    "You are a romantic poet expert who never repeats the same peom twice. Your mission is to generate 4 line poem in HTML and put each line in a <span> tag separate the first three lines with <br> tag. Then for the 5th line, put two </br> tags and sign the poem with 'SheCodes AI' at the end with class name of sign. Make sure to follow the instructions and eliminate html word in your print.";
  let prompt = `User instruction: Please generate a french poem about ${subject}. Also, put the subject word between <strong> tag.`;
  let apiUrl = `${apiBase}?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<span class="blink">⌛</span> Generating a French peom about ${subject}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
