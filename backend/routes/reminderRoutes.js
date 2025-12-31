const express = require("express");
const router = express.Router();
const {
  addReminder,
  getUserReminders,
  deleteEvent,
} = require("../controllers/reminderController");
router.post("/add", addReminder);
router.get("/user/:userId", getUserReminders);
router.delete("/:eventId", deleteEvent);

module.exports = router;
