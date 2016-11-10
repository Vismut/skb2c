var express = require('express');
var app = express();

function splitUserName(rawUserName){
	const templateUserName = new RegExp('@?(http?s?:)?(\/\/)?(([\w{3}\.]*)(vk|vkontakte|telegram|facebook|twitter)[^\/]*/)?([a-z0-9\.]*)','i');
	const userName = rawUserName.match(templateUserName);
	return '@'+userName[6];
}

app.get('/split_user', function (req, res){
	res.send(splitUserName(req.query['rawUserName']));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});