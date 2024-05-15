// Get reference to the form
const form = document.getElementById('babyForm');

// Attach event listener to form submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Get references to input fields
  const fullNameInput = document.getElementById('fullName');
  const genderSelect = document.getElementById('gender');
  const ageInput = document.getElementById('age');
  const parent1NameInput = document.getElementById('parent1Name');
  const parent2NameInput = document.getElementById('parent2Name');
  const locationInput = document.getElementById('location');
  const babyNumberInput = document.getElementById('babyNumber');
  const contactsInput = document.getElementById('contacts');

  // Perform validation checks
  if (!fullNameInput.value || !ageInput.value || !parent1NameInput.value || !parent2NameInput.value || !locationInput.value || !babyNumberInput.value || !contactsInput.value) {
    alert('All fields are required.');
    highlightInputs([fullNameInput, ageInput, parent1NameInput, parent2NameInput, locationInput, babyNumberInput, contactsInput]);
    return;
  }

  const age = parseInt(ageInput.value);
  if (isNaN(age) || age < 5 / 12 || age > 4 * 12) {
    alert('Age must be between 5 months and 4 years.');
    highlightInputs([ageInput]);
    return;
  }

  if (!/^\d+$/.test(babyNumberInput.value)) {
    alert('Baby number must contain only numbers.');
    highlightInputs([babyNumberInput]);
    return;
  }

  if (contactsInput.value.length < 10) {
    alert('Contact number must be at least 10 digits.');
    highlightInputs([contactsInput]);
    return;
  }

  // If all validations pass, allow the form to submit
  form.submit();
});

// Function to highlight input fields
function highlightInputs(inputs) {
  inputs.forEach(input => {
    input.style.borderColor = 'red';
  });
}
