var express = require('express');

var app = express();



app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res) {
  res.render('home');
  /*res.type('text/plain');
  res.send('Meadowlark Travel');*/
});

app.get('/about',function(req,res) {
  res.render('about');
  /*res.type('text/plain');
  res.send('About Meadowlark Travel');*/
});


//custom 404 Homepage
app.use(function(req,res) {
  res.status(404);
  res.render('404');
  /*
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');*/

});

//custom 500 Homepage
app.use(function(err,req,res,next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
/*  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');*/
});

/*app.listen(app.get('port'),function() {
  console.log('Express started on http://localhost:'+
app.get('port') + ';press Ctr-C to terminate');
});*/
