function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating peom...",
    autoStart: true,
    cursor: null,
    delay: 10,
  });

  let subject = document.querySelector("#input-text").value;
  let apiKey = "taf74bb8e045996263fo9880fc8a042e";
  let apiBase = "https://api.shecodes.io/ai/v1/generate";
  let context =
    "You are a romantic poet expert who never repeats the same peom twice. Your mission is to generate 4 line poem in HTML and put each line in div tag. Make sure to follow the user instruction and sign the poem with 'SheCodes AI' at the end with class name of sign.";
  let prompt = `User instruction: Please generate poem about ${subject}. Also, put the subject word in a bolder tag element and eliminate html word in your print.`;
  let apiUrl = `${apiBase}?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
