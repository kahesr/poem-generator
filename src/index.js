function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem goes here",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
