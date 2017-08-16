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
// app.get('/', function(req, res){
//
//   let html = '<form action="/" method="post">' +
//              '<h1>User Name</h1>' +
//              '<p>Enter your email</p>' +
//              '<input type="text" name="email" placeholder="email address" />' +
//              '<button type="submit">Submit</button>' +
//          '</form>';
//   res.send(html);
// });

app.post('/signup', function(req, res){
  let name = req.body.name;
  let email = req.body.email;
  let dob = req.body.dob;
  let job = req.body.job;
  let password = req.body.password;
  let html = `<p>Your user name is: ${name}</p>
  <p>Your user email is: ${email}</p>
  <p>Your user name is: ${dob}</p>
  <p>Your user name is: ${job}</p>
  <p>Your user name is: ${password}</p> `
  res.send(html);
});
//
//

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
