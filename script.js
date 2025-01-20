const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const textInputValue = textInput.value.trim();

  if (textInputValue === "") {
    alert("Please input a value");
    return;
  }

  const withoutAlphanumeric = textInputValue
    .replaceAll(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
  const checkPalindrome =
    withoutAlphanumeric === withoutAlphanumeric.split("").reverse().join("");
  textInput.value = "";

  result.textContent = `${textInputValue} is ${
    checkPalindrome ? "a" : "not a"
  } Palindrome`;
});
