// Import necessary modules
const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');




// Define route for the dashboard page
router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(),(req, res) => {
    // Logic to render the dashboard page
    res.render('dashboard'); 
});



module.exports = router;


