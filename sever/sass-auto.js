var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = module.exports = express();

var _src = '../app/scss/';
var _dest = '../app/css/';

var servidor;
var port = process.env.BASKET_APP_PORT || 4231;

servidor = app.listen(port, function(){
  console.log("the server is good to go :3");
});

app.use( sassMiddleware({
	/*Options*/
	src:_src,
	dest:_dest,
	debug:true
}));

app.use(express.static( _dest ));

console.log('Server listening on port ' + port);
console.log('srcPath is ' + _src);
console.log('destPath is ' + _dest);