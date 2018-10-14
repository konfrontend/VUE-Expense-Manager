const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
	title: String,
	updated_date: { type: Date, default: Date.now },
});
mongoose.model('Test', TestSchema);