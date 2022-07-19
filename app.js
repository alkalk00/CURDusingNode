const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const web = require('./route/web')

//databse connection
require('./db/conn');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//main page
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/',web);
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("Server is running at port 5000");
});