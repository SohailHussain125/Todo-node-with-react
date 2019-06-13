var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');




// database Config


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://root:admin1@ds263816.mlab.com:63816/todo-app-database', {useNewUrlParser: true})
    .then(() => {
      console.log('Start');
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });





var itemRouter = require('./src/routes/todoRoutes');


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', itemRouter);


const port = process.env.Port || 4000
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});

module.exports=app;