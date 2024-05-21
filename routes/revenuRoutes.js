const express = require("express");
const router = express.Router();
const Register = require("../models/registerBaby");

// Route to fetch total payments for the revenue report
router.get('/revenue-report', async (req, res) => {
  try {
    const totalPayments = await Register.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalPayments" }
        }
      }
    ]);

    const totalAmount = totalPayments.length > 0 ? totalPayments[0].totalAmount : 0;

    res.render('revenue_Report', { totalAmount });
  } catch (error) {
    console.error("Error calculating total payments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
