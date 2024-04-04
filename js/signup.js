 
//sign up js
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  // Check if local storage is supported
  if (typeof(Storage) !== "undefined") {
    // Save the username and password to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    // Redirect to login page
    window.location.href = "/pages/signin.html";
  } else {
    alert("Sorry, your browser does not support local storage. Please try a different browser.");
  }
});

