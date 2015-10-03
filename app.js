var express   = require('express');
var app       = express();

var port      = process.env.SERVER_PORT || 8080;

app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app);

console.log('Server listening on port ' + port);
app.listen(port);