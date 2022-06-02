const {
  clientEmailTemplate,
  studentResponseEmailTemplate,
  teacherResponseEmailTemplate,
  sendEmail,
} = require("../services/email.service");

exports.sendClientEmail = async (req, res) => {
  try {
    await sendEmail(clientEmailTemplate(req.body));
    return res.json({
      status: true,
      message: "Email sent successfully to the given Email ID",
    });
  } catch (err) {
    return res.json({
      status: false,
      message: "Unable to sent the email to the business",
      err: err,
    });
  }
};

exports.sendStudentResponseEmail = async (req, res) => {
  try {
    await sendEmail(studentResponseEmailTemplate(req.body));
    return res.json({
      status: true,
      message: "Email sent successfully to the business",
    });
  } catch (err) {
    return res.json({
      status: false,
      message: "Unable to sent the email to the business",
      err: err,
    });
  }
};

exports.sendTeacherResponseEmail = async (req, res) => {
  try {
    await sendEmail(teacherResponseEmailTemplate(req.body));
    return res.json({
      status: true,
      message: "Email sent successfully to the business",
    });
  } catch (err) {
    return res.json({
      status: false,
      message: "Unable to sent the email to the business",
      err: err,
    });
  }
};
