const inputBox = document.querySelector(".input").value;
const copyText = document.querySelector(".copy-button");

console.log(inputBox);

function Random() {
  var randomPassword =
    Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  inputBox.value = randomPassword;
}

copyText.addEventListener("click", function () {
  navigator.clipboard.writeText(inputBox);
});
