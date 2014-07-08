var express = require('express')
  , http = require('http')
  , path = require('path')
  , functions = require('./functions');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8080);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', function(req, res){
  res.sendfile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/assigment', functions.assign);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Hey ho! We're up and running on port " + app.get('port'));
});
