function signUp() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
      alert('Please provide both name and email.');
      return false;
  }

  // Simulate sending OTP (replace this with actual server-side logic)
  const otp = generateOTP();
  console.log('Generated OTP:', otp);

  // Simulate sending OTP via email (replace this with actual email sending logic)
  // In real-world scenario, you'd send the OTP using a server-side script
  alert('An OTP has been sent to your email.');

  return true;
}

function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000);
}