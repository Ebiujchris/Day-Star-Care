// Logout functionality
document.getElementById("logoutButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior
  
  // Clear saved credentials from local storage
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Redirect to login page
  window.location.href = "/pages/signin.html";
});