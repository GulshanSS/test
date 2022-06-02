const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

exports.clientEmailTemplate = (data) => {
  return {
    from: process.env.EMAIL__UNAME,
    to: data.email,
    subject: "Welcome!! Registration Completed!!",
    html: `Hi <b>${data.name}!</b><br>
          <span>Hope you are doing good!!</span><br>
          <p>Thanks for registering with us as a <b>${data.type}</b>!!
          Our Team will contact you asap.</p>
          <span>Regards,</span><br>
          <span>Tutoring Teens</span>`,
  };
};

exports.studentResponseEmailTemplate = (data) => {
  return {
    from: process.env.EMAIL__UNAME,
    to: process.env.EMAIL__UNAME,
    subject: `New Registration as ${data.type} Completed!!`,
    html: `New User details are as follows<br>
          <span>Registration Type:<b>${data.type}</b><span><br> 
          <span>Name:<b>${data.name}</b><span><br>
          <span>Email:<b>${data.email}</b><span><br>
          <span>Mobile Number:<b>${data.mobileNumber}</b><span><br>
          <span>Alternate Mobile NUmber:<b>${data.alternateMobileNumber}</b><span><br>
          <span>DOB:<b>${data.dob}</b><span><br>
          <span>Gender:<b>${data.gender}</b><span><br>
          <span>School Name:<b>${data.schoolName}</b><span><br>
          <span>Board:<b>${data.board}</b><span><br>
          <span>Class:<b>${data.classRoom}</b><span><br>
          <span>Subject:<b>${data.subject}</b><span><br>
          <span>Tutor Timing:<b>${data.tutorTiming}</b><span><br>
          <span>Residential Address:<b>${data.residentialAddress}</b><span><br>
          <span>Ciy:<b>${data.city}</b><span><br>
          <span>State:<b>${data.state}</b><span><br>
          <span>Pincode:<b>${data.pincode}</b><span><br>
          <span>Reference:<b>${data.reference}</b><span><br><br>
          <span>Regards,</span><br>
          <span>Tutoring Teens</span>`,
  };
};

exports.teacherResponseEmailTemplate = (data) => {
  return {
    to: process.env.EMAIL__UNAME,
    from: process.env.EMAIL__UNAME,
    subject: `New Registration as ${data.type} Completed!!`,
    html: `New User details are as follows<br>
          <span>Registration Type:<b>${data.type}</b><span><br> 
          <span>Name:<b>${data.name}</b><span><br>
          <span>Email:<b>${data.email}</b><span><br>
          <span>Permanent Address:<b>${data.permanentAddress}</b><span><br>
          <span>Temporary Address:<b>${data.temporaryAddress}</b><span><br>
          <span>Mobile Number:<b>${data.mobileNumber}</b><span><br>
          <span>Alternate Mobile NUmber:<b>${data.alternateMobileNumber}</b><span><br>
          <span>DOB:<b>${data.dob}</b><span><br>
          <span>Gender:<b>${data.gender}</b><span><br>
          <span>Aadhar:<b>${data.aadhar}</b><span><br>
          <span>Pan:<b>${data.pan}</b><span><br>
          <span>Education Qualification:<b>${data.educationQualification}</b><span><br>
          <span>Specialization:<b>${data.specialization}</b><span><br>
          <span>Institute:<b>${data.institute}</b><span><br>
          <span>SSC:<b>${data.ssc}</b><span><br>
          <span>HSC:<b>${data.hsc}</b><span><br>
          <span>Graduation:<b>${data.graduation}</b><span><br>
          <span>Coaching Experience:<b>${data.coachingExperience}</b><span><br>
          <span>Teaching Pattern:<b>${data.teachingPattern}</b><span><br>
          <span>Subject's like to teach:<b>${data.subjectsLikeToTeach}</b><span><br>
          <span>Classes like to teach:<b>${data.classesLikeToTeach}</b><span><br>
          <span>Prefered Area:<b>${data.preferedArea}</b><span><br>
          <span>Reference:<b>${data.reference}</b><span><br><br>
          <span>Regards,</span><br>
          <span>Tutoring Teens</span>`,
  };
};

exports.sendEmail = async (mailOption) => {
  try {
    await sgMail.send(mailOption);
    return true;
  } catch (err) {
    throw err;
  }
};
