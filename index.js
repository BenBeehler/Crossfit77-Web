const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

var port = process.env.YOUR_PORT || process.env.PORT || 80;
var host = process.env.YOUR_HOST || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('#', (req, res) => {
  res.render('index');
});
app.listen(port, host, () => {
  console.log('Express server listening on %d', port);
});
