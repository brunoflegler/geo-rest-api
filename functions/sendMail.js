var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'berossini@gmail.com',
            pass: '@mericAA'
        }
    });

const mailOptions = {
  from: 'berossini@gmail.com',
  to: 'bruno.rossini@el.com.br',
  subject: 'Subject of your email',
  html: '<p>Your html here</p>'
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
