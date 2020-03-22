const nodemailer = require('nodemailer');
let from = 'info@sportup.live'
let pass = 'i-tb%r53Ob+M';
let settings = {
  host: "sportup.live",
  port: 465,
  secure: true,
  auth: {
    user: from,
    pass: pass
  }
};
exports.sendMail = async function (email, name) 
{
  return await sendMail(email, name);
}

async function sendMail(email, name)
{
  // Change this to one of your email addresses in the organisation
  let body = { email, name };
  const transporter = nodemailer.createTransport(settings);
  console.log('send mail 1', body)
  let mailOptions = {
    from: 'info@sportup.live',
    to: body.email, // list of receivers
    subject: 'welcome text', // Subject line
    html: html
  };
  await transporter.verify();
  await transporter.sendMail(mailOptions, function (error, info)
  {
    if (error)
    {
      return 'Error when sending' + JSON.stringify({
        error: error.message,
      });
    }
    return `Email processed succesfully!`;

  });
}
