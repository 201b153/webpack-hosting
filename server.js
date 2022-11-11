var path = require('path');
var express = require('express');

var app = express();
    
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
    console.log('seret at port $http://localhost:8000', server.address().port);
})