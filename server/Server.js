const express = require('express');
const compress = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect');
const http = require('http');
const db = require('./Routes');

const app = express();

// enable ssl redirect
app.use(sslRedirect());

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));
app.use(compress());

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));


app.use('/db', db);

// frontend entry
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

// const keepAwake = () => {
//     console.log('called keepAwake');
//     // An object of options to indicate where to post to
//     const options = {
//         host: 'www.walnutnetwork.com',
//         path: '/',
//         method: 'POST'
//     };
//
//     // Set up the request
//     const request = http.request(options, (res) => {
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => {
//             console.log('Response: ' + chunk);
//         });
//     });
//
//     // post the data
//     request.write("Hello");
//     request.end();
// };
//
// keepAwake();
// setInterval(() => {
//     keepAwake();
// }, 1200000);

// Handles unknown routes
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.log(err);
    res.send('404: Page Not Found');
    next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

