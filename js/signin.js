


// Login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Retrieve saved credentials from local storage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // Check if the provided username and password match the saved credentials
  if (username === savedUsername && password === savedPassword) {
    // Redirect to dashboard upon successful login
    window.location.href = "/pages/dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
});



