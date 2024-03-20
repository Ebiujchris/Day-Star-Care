
function validateForm() {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  errorMessage.innerHTML = ''; // Reset error message

  // Simple password length validation
  if (password.length < 8) {
    errorMessage.innerHTML = 'Password must be at least 8 characters.';
    return;
  }

  // If all validations pass, submit the form (for demonstration purposes)
  document.getElementById('myForm').submit();
}
























//objects
let profile = {
    person: {
    firstName: "EBIU",
    secondName:"JULIUS",
    age: 33,
    salary: 1000000,
  }
  }
  console.log(profile)
document.getElementById('profile').innerHTML = ('profile');


  let sitters = [];

  /*const school = {
  sittersObject = {},
  sittersObject = {},
  sittersObject = {},
  }

  function addSitters(name,location) {
    sitters.push({name, location});
  };

  function getSitters(){
    return sitters;
  };

  addSitters('EBIU','NAJJERA');*/

  const primary = {                   //object with school with sitterobj1,2 and 3
    sittersObject1: {},
    sittersObject2: {},
    sittersObject3: {}
};

function addSitters(name, location) {                  //function to add sitters name and location
    school.sittersObject1[name] = location;
}

function getSitters() {                           //function to get sitter from one of the objects
    return school.sittersObject1;
}

addSitters('EBIU', 'NAJJERA');
addSitters('sarah', 'kibuye');

// Get the sittersList container element
let sittersListContainer = document.getElementById("sittersList");

// Create an unordered list element
let ul = document.createElement("ul");

// Get the sitters from the school object
let any = getSitters();

// Iterate over the sitters object and create list items for each sitter
for (let name in sitters) {
    let location = sitters[name];
    let li = document.createElement("li");
    li.textContent = name + " - " + location;
    ul.appendChild(li);
}

// Append the unordered list to the sittersList container
sittersListContainer.appendChild(ul);
