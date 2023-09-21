function checkEligibility() {
  // Retrieve values from the age input field and membership checkbox
  const ageInput = document.getElementById("age");
  const isMemberCheckbox = document.getElementById("membership");
  const outputField = document.getElementById("output");

  // Parse age as an integer
  const age = parseInt(ageInput.value);

  // Use conditional statements to check eligibility
  if (age >= 65) {
    outputField.textContent = "You are eligible for a Senior Discount.";
  } else if (age >= 18 && isMemberCheckbox.checked) {
    outputField.textContent = "You are eligible for a Member Discount.";
  } else {
    outputField.textContent = "You are not eligible for a discount.";
  }
}