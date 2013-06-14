var config = require('./config');
var express = require('express'); // the express framework
var cons = require('consolidate'); // required by swig
var swig = require('swig'); // the template engine

var app = express(); // start the framework!

var stripe = require('stripe')(config.api_key); // the payment library

// admin access only
var auth = express.basicAuth(function(user, pass) {
  // worst password ever
  return (user == "admin" && pass == "orangutan");
},'SOS donation test');

// start the template engine
app.engine('.html', cons.swig);
app.set('view engine', 'html');
swig.init({
  root: __dirname + '/views',
  allowErrors: true
});
app.set('views', __dirname + '/views');

app.use(express.bodyParser()); // for parsing the POST array
app.use(express.static(__dirname + '/static')); // serve static files
app.use(app.router); // switch on routing

// our homepage route
app.get('/', auth, function (req, res) {
  res.render('index.html', { test_donation: req.query.test_donation });
});

// POST route
app.post('/', function(req, res){
  // process stripe payment
  stripe.charges.create(
    {
      amount: parseInt(req.body.stripeAmount, 10), // amount in pennies
      currency: "usd", // stripe doesn't accept gbp yet
      card: req.body.stripeToken
    },
    function(err, charge) {
      if (err) {
        // something went wrong.
        console.log('Error: ' + err.message);
        res.redirect('/?test_donation=fail');
        return;
      }
      res.redirect('/?test_donation=success');
    }
  );
});

// catchall
app.get('*', function(req, res){
  res.redirect('http://www.orangutans-orangutan.org' + req.url, 302); // redirect to actual site
});

// last bit - listen
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on port " + port);
});