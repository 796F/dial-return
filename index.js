var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    _ = require('lodash'),
    config = require('./config')

var transporter = nodemailer.createTransport(config.smtps);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {

    var name = config.numbers[req.body.To] || 'NumberNotInConfig'

    transporter.sendMail({
        from: '"Airbnb Twilio Bot" <hi.honey.bunches@gmail.com>',
        to: 'mxia.mit@gmail.com, csample@cca.edu, andrew.h.jiang@gmail.com',
        subject: 'Airbnb SMS',
        text: req.body.From + ' sent "' + req.body.Body + '" to ' + req.body.To + ' under ' + name
    });

    var twiml = new twilio.TwimlResponse();
    twiml.message(config.message);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(config.port, function () {
    console.log("Express server listening on port" + config.port);
});