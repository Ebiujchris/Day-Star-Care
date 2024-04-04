// Function to add sitter to the table and store in local storage
function addSitter(formData) {
    const tableBody = document.querySelector('#sitterTable tbody');
    const newRow = tableBody.insertRow();
    
    newRow.innerHTML = `
        <td><img src="${formData.profilePic}" alt="Profile Picture" width="50"></td>
        <td>${formData.name}</td>
        <td>${formData.location}</td>
        <td>${formData.dob}</td>
        <td>${formData.gender}</td>
        <td>${formData.nextOfKin}</td>
        <td>${formData.nin}</td>
        <td>${formData.recommender}</td>
        <td>${formData.religion || ''}</td>
        <td>${formData.education}</td>
        <td>${formData.sitterNumber}</td>
        <td>${formData.phone1}</td>
        <td>${formData.phone2 || ''}</td>
        <td>${formData.email || ''}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;

    // Store sitter data in local storage
    let sitterData = JSON.parse(localStorage.getItem('sitterData')) || [];
    sitterData.push(formData);
    localStorage.setItem('sitterData', JSON.stringify(sitterData));
}

// Function to delete sitter from the table and local storage
function deleteSitter(row) {
    const tableBody = document.querySelector('#sitterTable tbody');
    const rowIndex = row.rowIndex - 1; // Adjust for the header row
    tableBody.deleteRow(rowIndex);

    // Remove sitter data from local storage
    let sitterData = JSON.parse(localStorage.getItem('sitterData')) || [];
    sitterData.splice(rowIndex, 1);
    localStorage.setItem('sitterData', JSON.stringify(sitterData));
}

// Event listener for form submission
document.getElementById('sitterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        profilePic: document.getElementById('profilePic').value,
        name: document.getElementById('name').value,
        location: document.getElementById('location').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        nextOfKin: document.getElementById('nextOfKin').value,
        nin: document.getElementById('nin').value,
        recommender: document.getElementById('recommender').value,
        religion: document.getElementById('religion').value,
        education: document.getElementById('education').value,
        sitterNumber: document.getElementById('sitterNumber').value,
        phone1: document.getElementById('phone1').value,
        phone2: document.getElementById('phone2').value,
        email: document.getElementById('email').value
    };

    // Add sitter to table and local storage
    addSitter(formData);

    // Reset form
    this.reset();
});

// Event delegation for delete button clicks
document.querySelector('#sitterTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const row = event.target.closest('tr');
        deleteSitter(row);
    }
});
