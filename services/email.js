

const sgMail = require('../config/sendgrid');

function sendVerificationEmail(userEmail, verificationToken) {
  const verificationLink = `http://your-app-url/verify/${verificationToken}`;

  const msg = {
    to: userEmail,
    from: 'dredorival@rocketmail.com',
    subject: 'Account Verification',
    text: `Click this link to verify your email: ${verificationLink}`,
    html: `Click <a href="${verificationLink}">here</a> to verify your email.`,
  };

  return sgMail.send(msg);
}

module.exports = {
  sendVerificationEmail,
};
