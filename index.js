var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    _ = require('lodash')

var transporter = nodemailer.createTransport('smtps://hihoneybunches%40gmail.com:marvinminsky@smtp.gmail.com');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
    transporter.sendMail({
        from: '"TWILIO NUMBER" <hi.honey.bunches@gmail.com>',
        to: 'mxia.mit@gmail.com, csample@cca.edu, andrew.h.jiang@gmail.com',
        subject: 'SMS RECEIVED',
        text: req.body.From + ' sent "' + req.body.Body + '" to ' + req.body.To
    });

    var twiml = new twilio.TwimlResponse();
    twiml.message('Hi! To reach us, email hi.honey.bunches@gmail.com!');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(1234, function () {
    console.log("Express server listening on port 1234");
});