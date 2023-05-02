const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const validLength = parseInt(input.dataset.length);
  const currentLength = input.value.length;

  if (currentLength === validLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
