const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const password = process.env.email_password;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stackhack.team@gmail.com',
        pass: password
    }
});


router.post('/add/contact', (req, res) => {
        const mailOptions = {
            from: 'stackhack.team@gmail.com',
            to: 'stackhack.team@gmail.com',
            subject: 'NEW CONTACT: ' + req.body.fname + ' ' + req.body.lname,
            html: `<div><h1>First Name: ${req.body.fname}</h1><br/><h1>Last Name: ${req.body.lname}</h1><h1>Email: ${req.body.email}</h1><br/><p>${req.body.discussion}</p></div>`
        };
        transporter.sendMail(mailOptions,  (err, info) => {
            if (err) {
                console.log('err', err);
                res.json({success: false, err: err});
            }
            else {
                console.log('info', info);
                res.json({success: true, info: info});
            }
        });
});

module.exports = router;