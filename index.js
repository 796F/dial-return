var twilio = require('twilio')
var nodemailer = require('nodemailer')
var _ = require('lodash')
var http = require('http')

var transporter = nodemailer.createTransport('smtps://hihoneybunches%40gmail.com:marvinminsky@smtp.gmail.com');

var mailOptions = {
    from: '"TWILIO NUMBER" <hi.honey.bunches@gmail.com>',
    to: 'mxia.mit@gmail.com, csample@cca.edu, andrew.h.jiang@gmail.com',
    subject: 'SMS RECEIVED',
    text: ''
};

http.createServer(function (req, res) {
    transporter.sendMail(_.assign(mailOptions, { text: JSON.stringify(req) }), function(error, info){
        res.writeHead(200, {'Content-Type': 'text/xml'});
    });
}).listen(1234);

console.log('twilio listening on 1234')
