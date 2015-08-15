var bodyParser = require('body-parser');
var express = require('express');
var pg = require('pg');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/events', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT event FROM events', function(err, result) {
      done();
      if (err) {
        console.error(err);
        response.status(500).json('Error ' + err);
      } else {
        response.json(result.rows.map(function(event) {
          return event.event;
        }));
      }
    })
  });
});

app.post('/events', function(request, response) {
  query = 'insert into events (event) values (\'' + JSON.stringify(request.body.event) + '\') returning id;';
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(query, function(err, result) {
      done();
      if (err) {
        console.error(err);
        response.status(500).json('Error ' + err);
      } else {
        response.status(200).json(result.rows[0].id);
      }
    })
  });
});

app.put('/events', function(request, response) {
  query = 'update events set event=\'' + JSON.stringify(request.body.event) + '\' where id=' + request.body.id + ' returning id;';
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(query, function(err, result) {
      done();
      if (err) {
        console.error(err);
        response.status(500).json('Error ' + err);
      } else {
        response.status(200).json(result.rows[0].id);
      }
    })
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


