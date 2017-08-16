const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//middleware//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index.mustache');
})
//
//
app.get('/', function(req, res){

  let html = '<form action="/" method="post">' +
             '<h1>User Name</h1>' +
             '<p>Enter your email</p>' +
             '<input type="text" name="email" placeholder="email address" />' +
             '<button type="submit">Submit</button>' +
         '</form>';
  res.send(html);
});

app.post('/form', function(req, res){
  let email = req.body.email;
  let html = '<p>Your user name is: </p>' + email;
  res.send(html);
});
app.listen(3000);
//
//

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
