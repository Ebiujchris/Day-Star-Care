  // Function to preview the uploaded passport photo
  function previewPhoto() {
    const preview = document.getElementById('photoPreview');
    const file = document.getElementById('passportPhoto').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

// Function to register a baby
function registerBaby() {
    const baby = {
        name: document.getElementById('babyName').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        location: document.getElementById('location').value,
        personName: document.getElementById('personName').value,
        arrivalTime: document.getElementById('arrivalTime').value,
        departureTime: document.getElementById('departureTime').value,
        parent1Name: document.getElementById('parent1Name').value,
        parent2Name: document.getElementById('parent2Name').value,
        fee: document.getElementById('fee').value,
        periodOfStay: document.getElementById('periodOfStay').value,
        babyNumber: document.getElementById('babyNumber').value,
        contacts: document.getElementById('contacts').value,
        comments: document.getElementById('comments').value
    };

    // Save baby details to local storage
    let babies = JSON.parse(localStorage.getItem('babies')) || [];
    babies.push(baby);
    localStorage.setItem('babies', JSON.stringify(babies));

    // Reset form
    document.getElementById('babyForm').reset();

    // Update baby table
    updateBabyTable();

    // Alert the user
    alert("Baby added");
}

// Function to update the baby table
function updateBabyTable() {
    const babyList = document.getElementById('babyList');
    babyList.innerHTML = '';

    let babies = JSON.parse(localStorage.getItem('babies')) || [];

    babies.forEach((baby, index) => {
        const row = `
            <tr>
                <td>${baby.name}</td>
                <td>${baby.gender}</td>
                <td>${baby.age}</td>
                <td>${baby.location}</td>
                <td>${baby.personName}</td>
                <td>${baby.arrivalTime}</td>
                <td>${baby.departureTime}</td>
                <td>${baby.parent1Name}</td>
                <td>${baby.parent2Name}</td>
                <td>${baby.fee}</td>
                <td>${baby.periodOfStay}</td>
                <td>${baby.babyNumber}</td>
                <td>${baby.contacts}</td>
                <td>${baby.comments}</td>
                <td>
                    <button onclick="editBaby(${index})">Edit</button>
                    <button onclick="deleteBaby(${index})">Delete</button>
                </td>
            </tr>
        `;
        babyList.innerHTML += row;
    });
}

// Function to edit a baby's details
function editBaby(index) {
    let babies = JSON.parse(localStorage.getItem('babies')) || [];
    const baby = babies[index];

    // Fill form with baby details
    document.getElementById('babyName').value = baby.name;
    document.getElementById('gender').value = baby.gender;
    document.getElementById('age').value = baby.age;
    document.getElementById('location').value = baby.location;
    document.getElementById('personName').value = baby.personName;
    document.getElementById('arrivalTime').value = baby.arrivalTime;
    document.getElementById('departureTime').value = baby.departureTime;
    document.getElementById('parent1Name').value = baby.parent1Name;
    document.getElementById('parent2Name').value = baby.parent2Name;
    document.getElementById('fee').value = baby.fee;
    document.getElementById('periodOfStay').value = baby.periodOfStay;
    document.getElementById('babyNumber').value = baby.babyNumber;
    document.getElementById('contacts').value = baby.contacts;
    document.getElementById('comments').value = baby.comments;

    // Remove the edited baby from the list
    babies.splice(index, 1);
    localStorage.setItem('babies', JSON.stringify(babies));

    // Update baby table
    updateBabyTable();
}

// Function to delete a baby's details
function deleteBaby(index) {
    let babies = JSON.parse(localStorage.getItem('babies')) || [];
    babies.splice(index, 1);
    localStorage.setItem('babies', JSON.stringify(babies));

    // Update baby table
    updateBabyTable();
}

// Load existing babies on page load
window.onload = function () {
    updateBabyTable();
};

