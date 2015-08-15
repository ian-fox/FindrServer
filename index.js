var express = require('express');
var fs = require('fs');
var app = express();

// create 

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/events', function(request, response) {
  fs.readFile('events.json', function(err, events) {
    response.send(events.toString());
  });
});

app.post('/events', function(request, response) {
  fs.readFile('events.json', function(events) {
    console.log(events);
    console.log(request);
  });
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


