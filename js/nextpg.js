// Function to add data to the table
function addDataToTable(babyData) {
  var tableBody = document.getElementById("babyTableBody");
  var row = tableBody.insertRow();

  // Add cells to the row
  row.insertCell().textContent = babyData.name;
  row.insertCell().textContent = babyData.gender;
  row.insertCell().textContent = babyData.age;
  row.insertCell().textContent = babyData.location;
  row.insertCell().textContent = babyData.parent1;
  row.insertCell().textContent = babyData.parent2;
  row.insertCell().textContent = babyData.babyId;

  // Add delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
      deleteRow(row);
  });
  row.insertCell().appendChild(deleteButton);

  // Add edit button
  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
      editRow(row);
  });
  row.insertCell().appendChild(editButton);
}

// Function to delete a row
function deleteRow(row) {
  var table = row.parentNode.parentNode;
  var rowIndex = row.rowIndex;
  table.deleteRow(rowIndex);
  updateLocalStorage();
}

// Function to edit a row
function editRow(row) {
  var cells = row.cells;
  document.getElementById("name").value = cells[0].textContent;
  document.getElementById("gender").value = cells[1].textContent;
  document.getElementById("age").value = cells[2].textContent;
  document.getElementById("location").value = cells[3].textContent;
  document.getElementById("parent1").value = cells[4].textContent;
  document.getElementById("parent2").value = cells[5].textContent;
  document.getElementById("babyId").value = cells[6].textContent;

  // Delete the row after editing
  row.parentNode.removeChild(row);
  updateLocalStorage();
}

// Function to update local storage
function updateLocalStorage() {
  var tableRows = document.querySelectorAll("#babyTableBody tr");
  var babyDataArray = [];
  tableRows.forEach(function(row) {
      var cells = row.cells;
      var babyData = {
          name: cells[0].textContent,
          gender: cells[1].textContent,
          age: cells[2].textContent,
          location: cells[3].textContent,
          parent1: cells[4].textContent,
          parent2: cells[5].textContent,
          babyId: cells[6].textContent
      };
      babyDataArray.push(babyData);
  });
  localStorage.setItem("babyData", JSON.stringify(babyDataArray));
}
