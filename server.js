const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

// const mongodb = require('mongodb');
const mongoose = require('mongoose');



const app = express();
app.use(serveStatic(__dirname + "/dist"));

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('Listening on port ' + port)
});