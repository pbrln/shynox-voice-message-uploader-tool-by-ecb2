const request = require('request'),
		Datauri = require('datauri'),
		fs = require('fs'),
		datauri = new Datauri(),
		file = process.argv[2],
		buffer = fs.readFileSync(file)
		

datauri.format('.wav', buffer)

request.post({url:'https://shynox.cc/shyVoiceMessages/upload.php', form: {data:datauri.content}}, function(err,httpResponse,body){ console.log(body.replace('.wav','')); })

