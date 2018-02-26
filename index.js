const request = require('request');
const Datauri = require('datauri');
const fs = require('fs');
const datauri = new Datauri();

const file = process.argv[2];

const buffer = fs.readFileSync(file);

datauri.format('.wav', buffer);

request.post({url:'https://shynox.cc/shyVoiceMessages/upload.php', form: {data:datauri.content}}, function(err,httpResponse,body){ console.log(body.replace('.wav','')); })

