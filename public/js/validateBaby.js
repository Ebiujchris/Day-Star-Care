// Get reference to the form
const form = document.getElementById('babyForm');

// Attach event listener to form submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Get references to input fields
  const fullNameInput = document.getElementById('fullName');
  const genderInput = document.getElementById('gender');
  const ageInput = document.getElementById('age');
  const parent1NameInput = document.getElementById('parent1Name');
  const parent2NameInput = document.getElementById('parent2Name');
  const locationInput = document.getElementById('location');
  const babyNumberInput = document.getElementById('babyNumber');
  const contactsInput = document.getElementById('contacts');
  const dateOfPaymentInput = document.getElementById('dateOfPayment');
  const broughtByInput = document.getElementById('broughtBy');
  const arrivalTimeInput = document.getElementById('arrivalTime');

  // Check if any field is empty
  if (!fullNameInput.value || !genderInput.value || !ageInput.value || !parent1NameInput.value || !parent2NameInput.value || !locationInput.value || !babyNumberInput.value || !contactsInput.value || !dateOfPaymentInput.value || !broughtByInput.value || !arrivalTimeInput.value) {
    alert('All fields are required.');
    highlightInputs([fullNameInput, genderInput, ageInput, parent1NameInput, parent2NameInput, locationInput, babyNumberInput, contactsInput, dateOfPaymentInput, broughtByInput, arrivalTimeInput]);
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



// Attach event listener to form submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Get references to all input fields
  const inputs = form.querySelectorAll('input, select');

  // Check if any field is empty
  let hasEmptyField = false;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      hasEmptyField = true;
      input.style.borderColor = 'red'; // Highlight empty fields in red
    } else {
      input.style.borderColor = ''; // Reset border color for filled fields
    }
  });

  // If any field is empty, display an alert and stop form submission
  if (hasEmptyField) {
    alert('All fields are required.');
    return;
  }

  // If all fields are filled, allow the form to submit
  form.submit();
});


 document.getElementById('babyForm').addEventListener('submit', function(event) {
                let valid = true;
                let fullName = document.getElementById('fullName');
                let gender = document.getElementById('gender');
                let age = document.getElementById('age');
                let parent1Name = document.getElementById('parent1Name');
                let location = document.getElementById('location');
                let contacts = document.getElementById('contacts');
                let babyNumber = document.getElementById('babyNumber');
                let sitter = document.getElementById('sitter');
                let time = document.getElementById('time');
                let fee = document.getElementById('fee');
                let dateOfPayment = document.getElementById('dateOfPayment');
                let broughtBy = document.getElementById('broughtBy');
                let arrivalTime = document.getElementById('arrivalTime');
                let arrivalPeriod = document.getElementById('arrivalPeriod');

                // Clear previous errors
                document.querySelectorAll('.error').forEach(function(el) {
                    el.textContent = '';
                });
                document.querySelectorAll('input, select').forEach(function(el) {
                    el.classList.remove('input-error');
                });

                // Check if fullName is entered
                if (!fullName.value.trim()) {
                    valid = false;
                    fullName.classList.add('input-error');
                    document.getElementById('fullNameError').textContent = 'Full name is required';
                }

                // Check if gender is selected
                if (!gender.value) {
                    valid = false;
                    gender.classList.add('input-error');
                    document.getElementById('genderError').textContent = 'Gender is required';
                }

                // Check if age is entered and valid
                if (!age.value || age.value < 0.5 || age.value > 5) {
                    valid = false;
                    age.classList.add('input-error');
                    document.getElementById('ageError').textContent = 'Age must be between 0.5 and 5 years';
                }

                // Check if parent1Name is entered
                if (!parent1Name.value.trim()) {
                    valid = false;
                    parent1Name.classList.add('input-error');
                    document.getElementById('parent1NameError').textContent = 'Parent 1 Name is required';
                }

                // Check if location is selected
                if (!location.value) {
                    valid = false;
                    location.classList.add('input-error');
                    document.getElementById('locationError').textContent = 'Location is required';
                }

                // Check if contacts is entered
                if (!contacts.value.trim()) {
                    valid = false;
                    contacts.classList.add('input-error');
                    document.getElementById('contactsError').textContent = 'Contacts are required';
                }

                // Check if babyNumber is a number
                if (!babyNumber.value.trim() || isNaN(babyNumber.value)) {
                    valid = false;
                    babyNumber.classList.add('input-error');
                    document.getElementById('babyNumberError').textContent = 'Baby Number must be a number';
                }

                // Check if sitter is selected
                if (!sitter.value) {
                    valid = false;
                    sitter.classList.add('input-error');
                    document.getElementById('sitterError').textContent = 'Sitter is required';
                }

                // Check if time is selected
                if (!time.value) {
                    valid = false;
                    time.classList.add('input-error');
                    document.getElementById('timeError').textContent = 'Time is required';
                }

                // Check if fee is selected
                if (!fee.value) {
                    valid = false;
                    fee.classList.add('input-error');
                    document.getElementById('feeError').textContent = 'Fee is required';
                }

                // Check if dateOfPayment is entered
                if (!dateOfPayment.value) {
                    valid = false;
                    dateOfPayment.classList.add('input-error');
                    document.getElementById('dateOfPaymentError').textContent = 'Date of Payment is required';
                }

                // Check if broughtBy is entered
                if (!broughtBy.value.trim()) {
                    valid = false;
                    broughtBy.classList.add('input-error');
                    document.getElementById('broughtByError').textContent = 'Brought By is required';
                }

                // Check if arrivalTime is entered
                if (!arrivalTime.value) {
                    valid = false;
                    arrivalTime.classList.add('input-error');
                    document.getElementById('arrivalTimeError').textContent = 'Time of Arrival is required';
                }

                // Check if arrivalPeriod is selected
                if (!arrivalPeriod.value) {
                    valid = false;
                    arrivalPeriod.classList.add('input-error');
                    document.getElementById('arrivalPeriodError').textContent = 'Arrival Period is required';
                }

                if (!valid) {
                    event.preventDefault(); // Prevent form submission
                }
            });



            // validate form 2
            document.getElementById('babyForm').addEventListener('submit', function(event) {
              let valid = true;
              let fullName = document.getElementById('fullName');
              let gender = document.getElementById('gender');
              let age = document.getElementById('age');
              let parent1Name = document.getElementById('parent1Name');
              let location = document.getElementById('location');
              let contacts = document.getElementById('contacts');
              let babyNumber = document.getElementById('babyNumber');
              let sitter = document.getElementById('sitter');
              let time = document.getElementById('time');
              let fee = document.getElementById('fee');
              let dateOfPayment = document.getElementById('dateOfPayment');
              let broughtBy = document.getElementById('broughtBy');
              let arrivalTime = document.getElementById('arrivalTime');
              let arrivalPeriod = document.getElementById('arrivalPeriod');

              // Clear previous errors
              document.querySelectorAll('.error').forEach(function(el) {
                  el.textContent = '';
              });
              document.querySelectorAll('input, select').forEach(function(el) {
                  el.classList.remove('input-error');
              });

              // Check if fullName is entered
              if (!fullName.value.trim()) {
                  valid = false;
                  fullName.classList.add('input-error');
                  document.getElementById('fullNameError').textContent = 'Full name is required';
              }

              // Check if gender is selected
              if (!gender.value) {
                  valid = false;
                  gender.classList.add('input-error');
                  document.getElementById('genderError').textContent = 'Gender is required';
              }

              // Check if age is entered and valid
              if (!age.value || age.value < 0.5 || age.value > 5) {
                  valid = false;
                  age.classList.add('input-error');
                  document.getElementById('ageError').textContent = 'Age must be between 0.5 and 5 years';
              }

              // Check if parent1Name is entered
              if (!parent1Name.value.trim()) {
                  valid = false;
                  parent1Name.classList.add('input-error');
                  document.getElementById('parent1NameError').textContent = 'Parent 1 Name is required';
              }

              // Check if location is selected
              if (!location.value) {
                  valid = false;
                  location.classList.add('input-error');
                  document.getElementById('locationError').textContent = 'Location is required';
              }

              // Check if contacts is entered
              if (!contacts.value.trim()) {
                  valid = false;
                  contacts.classList.add('input-error');
                  document.getElementById('contactsError').textContent = 'Contacts are required';
              }

              // Check if babyNumber is a number
              if (!babyNumber.value.trim() || isNaN(babyNumber.value)) {
                  valid = false;
                  babyNumber.classList.add('input-error');
                  document.getElementById('babyNumberError').textContent = 'Baby Number must be a number';
              }

              // Check if sitter is selected
              if (!sitter.value) {
                  valid = false;
                  sitter.classList.add('input-error');
                  document.getElementById('sitterError').textContent = 'Sitter is required';
              }

              // Check if time is selected
              if (!time.value) {
                  valid = false;
                  time.classList.add('input-error');
                  document.getElementById('timeError').textContent = 'Time is required';
              }

              // Check if fee is selected
              if (!fee.value) {
                  valid = false;
                  fee.classList.add('input-error');
                  document.getElementById('feeError').textContent = 'Fee is required';
              }

              // Check if dateOfPayment is entered
              if (!dateOfPayment.value) {
                  valid = false;
                  dateOfPayment.classList.add('input-error');
                  document.getElementById('dateOfPaymentError').textContent = 'Date of Payment is required';
              }

              // Check if broughtBy is entered
              if (!broughtBy.value.trim()) {
                  valid = false;
                  broughtBy.classList.add('input-error');
                  document.getElementById('broughtByError').textContent = 'Brought By is required';
              }

              // Check if arrivalTime is entered
              if (!arrivalTime.value) {
                  valid = false;
                  arrivalTime.classList.add('input-error');
                  document.getElementById('arrivalTimeError').textContent = 'Time of Arrival is required';
              }

              // Check if arrivalPeriod is selected
              if (!arrivalPeriod.value) {
                  valid = false;
                  arrivalPeriod.classList.add('input-error');
                  document.getElementById('arrivalPeriodError').textContent = 'Arrival Period is required';
              }

              if (!valid) {
                  event.preventDefault(); // Prevent form submission
              }
          });