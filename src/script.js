function resetValues() {
  var billAmount = document.getElementById("billAmount");
  var billAmountError = document.getElementById("billAmountError");
  billAmount.value = "";
  billAmount.classList.remove("errorField");
  billAmountError.classList.add("hide");
  var tipCustom = document.getElementById("tipCustom");
  tipCustom.value = "";
  var peopleCount = document.getElementById("peopleCount");
  var peopleCountError = document.getElementById("peopleCountError");
  peopleCount.value = "";
  peopleCount.classList.remove("errorField");
  peopleCountError.classList.add("hide");
  var tipAmount = document.getElementById("tipAmount");
  tipAmount.textContent = "0.00";
  var totalAmount = document.getElementById("totalAmount");
  totalAmount.textContent = "0.00";
}

function calculate(param) {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const peopleCount = parseFloat(document.getElementById("peopleCount").value);
  const tipAmount = parseFloat((billAmount * param) / 100);
  const totalAmount = billAmount + tipAmount;
  document.getElementById("tipAmount").textContent = (tipAmount / peopleCount).toFixed(2);
  document.getElementById("totalAmount").textContent = (totalAmount / peopleCount).toFixed(2);
}

function numValidate(param) {
  var field = document.getElementById(param.id);
  var errorField = document.getElementById(param.id + "Error");
  if (/^[1-9]+[0-9]*$/g.test(param.value)) {
    field.classList.remove("errorField");
    errorField.classList.add("hide");
  } else {
    field.classList.add("errorField");
    errorField.classList.remove("hide");
  }
}
