document.addEventListener("DOMContentLoaded", function() {
  var selectElement = document.getElementById("chooseOption");
  var textInput = document.getElementById("textInput");

  selectElement.addEventListener("change", function() {
    var selectedValue = selectElement.value;
    document.getElementById("selectedOption").innerText = "Selected option: " + selectedValue;
  });

  textInput.addEventListener("input", function() {
    var enteredText = textInput.value;
    document.getElementById("enteredText").innerText = "Entered text: " + enteredText;
  });
});
submitButton.addEventListener("click", function() {
  alert("Button clicked!");
  // Add your logic here for what happens when the button is clicked
});
function formatCurrency(input) {
  // Remove non-numeric characters and leading zeros
  let value = input.value.replace(/[^\d]/g, '').replace(/^0+/, '');

  // Format as currency (e.g., 1234 -> $1,234)
  if (value !== '') {
      value = 'Ksh' + '' + parseFloat(value).toLocaleString('en-US');
  }

  input.value = value;
}