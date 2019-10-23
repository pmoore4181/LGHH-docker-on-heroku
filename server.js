const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/css'))); // contains css
app.use(express.static(__dirname + '/photos')); // contains images
app.use(express.static(__dirname + '/Javascript')); // contains js
app.use(express.static(__dirname + '/views')); //contains mainpage.html
app.use(express.static(__dirname + '/bower_components')); // contains bootstrap stuff

app.set('PORT', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, "views/lghh.html"));
});

app.listen(app.get('PORT'));
console.log('Running on port', app.get('PORT'));
