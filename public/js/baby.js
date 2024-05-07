// Get all the buttons in the table
const buttons = document.querySelectorAll('#babyTable button');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const form = button.parentElement; // Get the parent form
    const babyId = form.action.split('/').pop(); // Extract baby ID from form action

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: babyId })
      });

      if (response.ok) {
        const responseBody = await response.json();
        // Redirect to the appropriate page based on the baby's status
        if (responseBody.status === 'Checked In') {
          window.location.href = '/checked-in-babies'; // Redirect to checked-in babies list
        } else if (responseBody.status === 'Checked Out') {
          window.location.href = '/checked-out-babies'; // Redirect to checked-out babies list
        }
      } else {
        console.error('Failed to update baby status');
      }
    } catch (error) {
      console.error(error);
    }
  });
});
