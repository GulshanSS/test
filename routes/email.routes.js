const express = require("express");
const router = express.Router();

const {
  sendClientEmail,
  sendStudentResponseEmail,
  sendTeacherResponseEmail,
} = require("../controllers/email.controller");

router.post("/client", sendClientEmail);

router.post("/response/student", sendStudentResponseEmail);

router.post("/response/teacher", sendTeacherResponseEmail);

module.exports = router;
