const inputRef = document.querySelector('[type="number"]');
const createdRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function onCreateMarkup() {
  const value = inputRef.value;
  if (!value) return;
  const markup = createMarkup(value);
  updateMarkup(markup);
}

function createMarkup(payload) {
  let size = 30;
  const markup = [];
  for (let i = 0; i < Number(payload); i++) {
    markup.push(
      `<div class="item" style="width:${size}px; height:${size}px; background: ${getRandomHexColor()}"></div>`
    );
    size += 10;
  }
  return markup.join("");
}

function updateMarkup(markup = "") {
  boxesRef.innerHTML = markup;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createdRef.addEventListener("click", onCreateMarkup);
destroyRef.addEventListener("click", () => {
  inputRef.value = "";
  updateMarkup();
});
