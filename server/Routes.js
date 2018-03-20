"use strict";
const express = require('express');
const router = express.Router();
// const contact = require('./resources/contact');
const fs = require('fs');

router.post('/add/contact', (req, res) => {
    try {
        // console.log('req', req.body);
        // console.log('contact', contact);
        // //console.log('parsed', JSON.parse(contact));
        // const copy = Array.from(contact);
        // copy.push(req.body);
        // console.log('added', copy);
        // let send = JSON.stringify(copy);
        // fs.writeFileSync('contact.json', send);
        fs.readFile('contact.json', (err, data) => {
            if (err) throw err;
            const parsed = JSON.parse(data);
            //const copy = Array.from(data);
            parsed.push(req.body);
            console.log('parsed added', parsed);
            const json = JSON.stringify(parsed, null, 2);
            fs.writeFile('contact.json', json, (err) => {
                if (err) throw err;
                console.log('Data written to file');
                res.json({success: true})
            })
        });
    } catch(error) {
        console.log('err', error);
        res.json({success: false});
    }


});

module.exports = router;