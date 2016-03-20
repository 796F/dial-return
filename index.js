var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    _ = require('lodash')

// var transporter = nodemailer.createTransport('smtps://hihoneybunches%40gmail.com:marvinminsky@smtp.gmail.com');

// var mailOptions = {
//     from: '"TWILIO NUMBER" <hi.honey.bunches@gmail.com>',
//     to: 'mxia.mit@gmail.com, csample@cca.edu, andrew.h.jiang@gmail.com',
//     subject: 'SMS RECEIVED',
//     text: ''
// };

// http.createServer(function (req, res) {
//     transporter.sendMail(_.assign(mailOptions, { text: JSON.stringify(req) }), function(error, info){
//         res.writeHead(200, {'Content-Type': 'text'});
//         res.end("OK")
//     });
// }).listen(1234);

// console.log('twilio listening on 1234')

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
    console.log(req.body)
    // var twiml = new twilio.TwimlResponse();
    // if (req.body.Body == 'hello') {
    //     twiml.message('Hi!');
    // } else if(req.body.Body == 'bye') {
    //     twiml.message('Goodbye');
    // } else {
    //     twiml.message('No Body param match, Twilio sends this in the request to your server.');
    // }
    // res.writeHead(200, {'Content-Type': 'text/xml'});
    // res.end(twiml.toString());
});

http.createServer(app).listen(1234, function () {
    console.log("Express server listening on port 1234");
});