var express  = require("express");

var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');



app.set("port",process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res) {
  res.render('home');
  /*

  res.type('text/plain');
  res.send('Meadlowlark Travel');
*/
});

app.get('/about',function(req,res) {
  res.render('about');
/*  res.type('text/plain');
  res.send('About Meadowlark travel');*/
});

app.use(function(req,res) {
  res.type('text/plaint');
  res.status(404);
  res.send("404 - Not Found");
});

app.use(function(err,req,res,next) {
  console.error(err.stack);;
  res.type('text/plaint');
  res.status(500);
  res.send("500 - Server doesnt response");
});

app.listen(app.get('port'),function() {
  console.log("express started on localhost:" + app.get('port'));
});
