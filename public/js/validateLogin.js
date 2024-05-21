function validateForm(event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  let valid = true;
  
  if (!emailPattern.test(email.value)) {
    email.style.borderColor = 'red';
    valid = false;
  } else {
    email.style.borderColor = '';
  }
  
  if (password.value.trim() === '') {
    password.style.borderColor = 'red';
    valid = false;
  } else {
    password.style.borderColor = 'red';
  }
  
  if (valid) {
    document.getElementById('loginform').submit();
  }
}