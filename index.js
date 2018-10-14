const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

require('./server/models');

const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const posts = require('./server/routes/api/posts');
const app = express();
const port = process.env.PORT || 9999;

console.log(__dirname);
//Middleware
app.use(serveStatic(path.join(__dirname + '/dist')));
app.use('/api/posts/', posts);
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});