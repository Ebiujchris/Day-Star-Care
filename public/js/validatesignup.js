function validateForm(event) {
  event.preventDefault();
  
  const form = document.getElementById('signupForm');
  const fields = ['name', 'nationalId', 'gender', 'address', 'contact', 'nextOfKin', 'email', 'password'];
  let valid = true;

  // Clear previous errors
  fields.forEach(field => {
      document.getElementById(field).classList.remove('input-error');
      document.getElementById(field + 'Error').textContent = '';
  });

  // Validation rules
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const nationalIdPattern = /^(CM|CF)[0-9]{12}$/;

  // Check all fields
  fields.forEach(field => {
      const input = document.getElementById(field);
      if (!input.value.trim()) {
          input.classList.add('input-error');
          document.getElementById(field + 'Error').textContent = 'This field is required';
          valid = false;
      }
  });

  // Check specific fields
  const email = document.getElementById('email');
  if (!emailPattern.test(email.value)) {
      email.classList.add('input-error');
      document.getElementById('emailError').textContent = 'Invalid email address';
      valid = false;
  }

  const nationalId = document.getElementById('nationalId');
  if (!nationalIdPattern.test(nationalId.value)) {
      nationalId.classList.add('input-error');
      document.getElementById('nationalIdError').textContent = 'National ID must start with CM or CF and have 14 characters';
      valid = false;
  }

  if (valid) {
      form.submit();
  }
}