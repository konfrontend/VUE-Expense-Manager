const express = require('express');
const serveStatic = require('serve-static');

require('./models');

const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(serveStatic(__dirname + "/dist"));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

const posts = require('./routes/api/posts');

app.use('/api/posts/', posts);

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});