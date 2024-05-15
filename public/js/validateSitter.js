function validateForm() {
  var name = document.getElementById('name').value.trim();
  var location = document.getElementById('location').value.trim();
  var age = document.getElementById('age').value.trim();
  var gender = document.getElementById('gender').value.trim();
  var nextOfKin = document.getElementById('nextOfKin').value.trim();
  var nin = document.getElementById('nin').value.trim();
  var recommender = document.getElementById('recommender').value.trim();
  var religion = document.getElementById('religion').value.trim();
  var education = document.getElementById('education').value.trim();
  var sitterNumber = document.getElementById('sitterNumber').value.trim();
  var contacts = document.getElementById('contacts').value.trim();

  // Resetting styles
  resetStyles();

  // Validating all fields are filled
  if (name === '' || location === '' || age === '' || gender === '' || nextOfKin === '' ||
      nin === '' || recommender === '' || religion === '' || education === '' ||
      sitterNumber === '' || contacts === '') {
      alert('All fields are required');
      applyRedBorder();
      return false;
  }

  // Validating NIN
  if (!nin.startsWith('CM') && !nin.startsWith('CF') || nin.length < 14) {
      alert('NIN must start with CM or CF and have at least 14 characters');
      document.getElementById('nin').style.borderColor = 'red';
      return false;
  }

  // Validating age
  if (parseInt(age) < 18) {
      alert('Age must be 18 or greater');
      document.getElementById('age').style.borderColor = 'red';
      return false;
  }

  // Validating contacts
  if (contacts.length < 10) {
      alert('Contacts should be at least 10 digits');
      document.getElementById('contacts').style.borderColor = 'red';
      return false;
  }

  // Validating sitterNumber
  if (isNaN(sitterNumber)) {
      alert('Sitter Number should be a number');
      document.getElementById('sitterNumber').style.borderColor = 'red';
      return false;
  }

  return true;
}

function resetStyles() {
  document.getElementById('name').style.borderColor = '';
  document.getElementById('location').style.borderColor = '';
  document.getElementById('age').style.borderColor = '';
  document.getElementById('gender').style.borderColor = '';
  document.getElementById('nextOfKin').style.borderColor = '';
  document.getElementById('nin').style.borderColor = '';
  document.getElementById('recommender').style.borderColor = '';
  document.getElementById('religion').style.borderColor = '';
  document.getElementById('education').style.borderColor = '';
  document.getElementById('sitterNumber').style.borderColor = '';
  document.getElementById('contacts').style.borderColor = '';
}

function applyRedBorder() {
  document.getElementById('name').style.borderColor = 'red';
  document.getElementById('location').style.borderColor = 'red';
  document.getElementById('age').style.borderColor = 'red';
  document.getElementById('gender').style.borderColor = 'red';
  document.getElementById('nextOfKin').style.borderColor = 'red';
  document.getElementById('nin').style.borderColor = 'red';
  document.getElementById('recommender').style.borderColor = 'red';
  document.getElementById('religion').style.borderColor = 'red';
  document.getElementById('education').style.borderColor = 'red';
  document.getElementById('sitterNumber').style.borderColor = 'red';
  document.getElementById('contacts').style.borderColor = 'red';
}
