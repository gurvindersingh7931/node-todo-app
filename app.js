var express = require("express");
var todoController = require('./controllers/todoController');
var app = express();

// set up view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log("You are listening on port 3000");